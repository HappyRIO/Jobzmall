"use client";

import React, { useState, useRef, useEffect } from 'react';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ChairRoundedIcon from '@mui/icons-material/ChairRounded';

const SearchLocation: React.FC = () => {
    
    const allSuggestions : string[] = ["Current Location", "Everytwhere", "Remote"];
    // let allDescriptions:string[] = [];
    // menuList.map((item) => {
    //     allSuggestions.push(item.title)
    //     allDescriptions.push(item.description)
    // })
    const [inputValue, setInputValue] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>(allSuggestions);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for the dropdown

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        if (value) {
            // const filteredSuggestions = allSuggestions.filter((suggestion) =>
            //     suggestion.toLowerCase().includes(value.toLowerCase())
            // );
            // setSuggestions(filteredSuggestions);
            setIsDropdownOpen(true);
        } else {
            setIsDropdownOpen(false);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        setIsDropdownOpen(false);
        setSuggestions([]);
    };

    const handleInputFocus = () => {
        if (!inputValue) {
            setSuggestions(allSuggestions);
        }
        setIsDropdownOpen(true);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <input
                className="flex w-full p-2 px-10 rounded bg-gray-200 outline-none cursor-pointer max-md:rounded-full max-md:py-4 max-md:px-12 max-md:bg-white max-md:shadow-lg"
                aria-autocomplete="both"
                id="autocomplete-17-input"
                placeholder="Search Location"
                type="search"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onClick={handleInputFocus}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <LocationOnTwoToneIcon fontSize='small'/>
            </span>
            {isDropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
                    <div className='text-gray-500 px-4 py-3.5 font-medium text-sm'>Location Results</div>
                    <div className='text-gray-500 px-4 py-3.5 font-medium text-sm'>Other Options</div>
                    {suggestions.map((suggestion, idx) => (
                        <div key={suggestion} className='flex items-center px-7 py-3 hover:bg-gray-200 cursor-pointer'>
                            <div className='pr-5 text-gray-500'>
                                {idx === 0 && <MyLocationOutlinedIcon />}
                                {idx === 1 && <PublicOutlinedIcon />}
                                {idx === 2 && <ChairRoundedIcon />}
                            </div>
                            <div>
                                <div                                  
                                    className="text-base"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </div>
                                {/* <div className='text-gray-600 text-sm'>{menuList.find(item => item.title === suggestion)?.description || ''}</div> */}
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchLocation;