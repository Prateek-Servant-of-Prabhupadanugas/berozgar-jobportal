import React, { useEffect, useState, useRef, useMemo } from 'react';
import './RoyalBackground.css';

const Particle = () => {
  const style = useMemo(() => {
    const startX = Math.random() * 100;
    const duration = 4 + Math.random() * 6;
    const delay = Math.random() * -10;
    const size = 2 + Math.random() * 4;
    return {
      left: `${startX}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    };
  }, []);
  return <div className="royal-particle" style={style} />;
};

const ParticleEmitter = ({ parentRef }) => {
  const poolSize = 60; 
  const particlesRef = useRef([]); 
  const indexRef = useRef(0); 

  useEffect(() => {
    const spawnCluster = () => {
      if (!parentRef.current) return;
      const rect = parentRef.current.getBoundingClientRect();
      if (rect.top < -100 || rect.left < -100 || 
          rect.top > window.innerHeight + 100 || 
          rect.left > window.innerWidth + 100) return;

      for (let i = 0; i < 3; i++) {
        const el = particlesRef.current[indexRef.current];
        if (el) {
          const trailOffset = 20; 
          const offsetX = ((Math.random() - 0.5) * rect.width) - trailOffset;
          const offsetY = ((Math.random() - 0.5) * rect.height) - trailOffset;
          el.style.left = `${rect.left + rect.width / 2 + offsetX}px`;
          el.style.top = `${rect.top + rect.height / 2 + offsetY}px`;
          el.classList.remove('spawning');
          void el.offsetWidth; 
          el.classList.add('spawning');
        }
        indexRef.current = (indexRef.current + 1) % poolSize;
      }
    };
    const intervalId = setInterval(spawnCluster, 150);
    return () => clearInterval(intervalId);
  }, [parentRef]);

  return (
    <>
      {[...Array(poolSize)].map((_, i) => (
        <div key={i} ref={(el) => (particlesRef.current[i] = el)} className="dropped-particle" />
      ))}
    </>
  );
};

const Cube = () => {
  const cubeRef = useRef(null);
  const style = useMemo(() => {
    const spawnFromTop = Math.random() > 0.5;
    let startX, startY;
    if (spawnFromTop) {
      startX = Math.random() * 100;
      startY = -150;
    } else {
      startX = -150;
      startY = Math.random() * 80;
    }
    return {
      left: spawnFromTop ? `${startX}%` : `${startX}px`,
      top: spawnFromTop ? `${startY}px` : `${startY}%`,
      animationDuration: `${15 + Math.random() * 10}s`, // Slightly slower for "Royal" feel
      width: `${25 + Math.random() * 25}px`,
      height: `${25 + Math.random() * 25}px`,
    };
  }, []);

  return (
    <>
      <div ref={cubeRef} className="cube-stream" style={style}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="cube-3d" style={{ animationDelay: `${i * -0.15}s`, opacity: 1 - i * 0.18 }}>
            <div className="face front"></div><div className="face back"></div>
            <div className="face right"></div><div className="face left"></div>
            <div className="face top"></div><div className="face bottom"></div>
          </div>
        ))}
      </div>
      <ParticleEmitter parentRef={cubeRef} />
    </>
  );
};

export default function RoyalBackground() {
  const cubes = useMemo(() => Array.from({ length: 4 }), []); // 38% of original 10
  const particles = useMemo(() => Array.from({ length: 30 }), []);

  return (
    <div className="royal-bg-container">
      {particles.map((_, i) => <Particle key={i} />)}
      {cubes.map((_, i) => <Cube key={i} />)}
    </div>
  );
}