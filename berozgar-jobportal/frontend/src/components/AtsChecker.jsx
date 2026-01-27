import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { Input } from './ui/input';
import { Loader2, UploadCloud, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import './AtsChecker.css';

// Using a stable CDN for the PDF worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const AtsChecker = () => {
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(false);

    const skillsToCheck = ["React", "Node", "Express", "MongoDB", "JavaScript", "Redux", "Tailwind", "REST API", "Git", "TypeScript", "Docker", "Next.js"];

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setLoading(true);
        const reader = new FileReader();

        reader.onload = async (event) => {
            try {
                const typedarray = new Uint8Array(event.target.result);
                const pdf = await pdfjsLib.getDocument(typedarray).promise;
                let fullText = "";

                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    fullText += textContent.items.map(s => s.str).join(" ").toLowerCase();
                }

                const found = [];
                const missing = [];

                skillsToCheck.forEach(skill => {
                    if (fullText.includes(skill.toLowerCase())) {
                        found.push(skill);
                    } else {
                        missing.push(skill);
                    }
                });

                const score = Math.round((found.length / skillsToCheck.length) * 100);
                setAnalysis({ score, found, missing });
            } catch (error) {
                console.error("PDF Parsing error:", error);
            } finally {
                setLoading(false);
            }
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div className="ats-main-container">
            <div className="ats-card-3d">
                <div className="ats-header">
                    <Sparkles className="text-[#AD49E1] mb-2" />
                    <h2 className="ats-title">ATS Optimizer</h2>
                    <p className="ats-subtitle">Benchmark your resume against MERN standards</p>
                </div>
                
                <div className="ats-upload-section">
                    <label htmlFor="ats-upload" className="ats-dropzone-3d">
                        <UploadCloud size={50} className="upload-icon" />
                        <div className="text-center">
                            <span className="block font-bold text-[#2E073F]">Upload PDF Resume</span>
                            <span className="text-xs text-[#7A1CAC] opacity-70">No data leaves your browser</span>
                        </div>
                        <Input id="ats-upload" type="file" accept=".pdf" onChange={handleFileUpload} className="hidden" />
                    </label>
                </div>

                {loading && (
                    <div className="loading-overlay">
                        <Loader2 className="spinner-3d" />
                        <p className="loading-text">Deep Scanning Resume...</p>
                    </div>
                )}

                {analysis && !loading && (
                    <div className="results-wrapper-3d">
                        <div className="score-hero">
                            <div className="circular-progress" style={{ '--percent': analysis.score }}>
                                <div className="inner-circle">
                                    <span className="percentage">{analysis.score}%</span>
                                </div>
                            </div>
                            <div className="status-badge">
                                <h3>{analysis.score > 70 ? "Ready to Apply" : "Needs Optimization"}</h3>
                                <p>ATS Compatibility Match</p>
                            </div>
                        </div>

                        <div className="analysis-grid">
                            <div className="analysis-box box-found">
                                <h4 className="box-title"><CheckCircle2 size={16} /> Skills Found</h4>
                                <div className="pill-container">
                                    {analysis.found.map(s => <span key={s} className="ats-pill pill-3d-green">{s}</span>)}
                                </div>
                            </div>
                            <div className="analysis-box box-missing">
                                <h4 className="box-title"><AlertCircle size={16} /> Suggestions</h4>
                                <div className="pill-container">
                                    {analysis.missing.map(s => <span key={s} className="ats-pill pill-3d-red">{s}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AtsChecker;