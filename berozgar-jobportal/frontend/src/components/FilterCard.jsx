import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import './FilterCard.css'

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
    }

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue]);

    return (
        <div className='filter-card-3d-wrapper'>
            <div className='filter-card-content'>
                <h1 className='filter-main-title'>Filter Jobs</h1>
                <div className='filter-divider'></div>
                
                <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                    {
                        fitlerData.map((data, index) => (
                            <div key={index} className="filter-group-section">
                                <h2 className='filter-group-title'>{data.fitlerType}</h2>
                                {
                                    data.array.map((item, idx) => {
                                        const itemId = `id${index}-${idx}`
                                        return (
                                            <div key={itemId} className='filter-option-item'>
                                                <div className="radio-3d-container">
                                                    <RadioGroupItem 
                                                        value={item} 
                                                        id={itemId} 
                                                        className="custom-radio-3d" 
                                                    />
                                                </div>
                                                <Label 
                                                    htmlFor={itemId} 
                                                    className="filter-label-3d"
                                                >
                                                    {item}
                                                </Label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        ))
                    }
                </RadioGroup>
            </div>
        </div>
    )
}

export default FilterCard