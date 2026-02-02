import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { Filter } from 'lucide-react'
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
        <div className='filter-card-obsidian-wrapper'>
            <div className='filter-card-glass-content'>
                <div className="flex items-center gap-2 mb-2">
                    <Filter size={18} className="text-[#f59e0b]" />
                    <h1 className='filter-main-title text-white'>Filter Jobs</h1>
                </div>
                <div className='filter-divider-royal'></div>
                
                <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                    {
                        fitlerData.map((data, index) => (
                            <div key={index} className="filter-group-section">
                                <h2 className='filter-group-title-royal'>{data.fitlerType}</h2>
                                {
                                    data.array.map((item, idx) => {
                                        const itemId = `id${index}-${idx}`
                                        return (
                                            <div key={itemId} className='filter-option-item-royal'>
                                                <RadioGroupItem 
                                                    value={item} 
                                                    id={itemId} 
                                                    className="custom-radio-royal" 
                                                />
                                                <Label 
                                                    htmlFor={itemId} 
                                                    className="filter-label-royal text-slate-300"
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