import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';
import './CategoryCarousel.css';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="carousel-3d-container">
            <Carousel className="w-full max-w-xl mx-auto my-20 carousel-perspective">
                <CarouselContent className="-ml-2 md:-ml-4">
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 py-10">
                                <div className="category-card-3d">
                                    <Button 
                                        onClick={() => searchJobHandler(cat)} 
                                        className="category-btn-royal"
                                    >
                                        <span className="btn-content">{cat}</span>
                                    </Button>
                                    {/* The glow replaces the old dark shadow */}
                                    <div className="card-glow-royal"></div>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="nav-btn-royal left-btn" />
                <CarouselNext className="nav-btn-royal right-btn" />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel;