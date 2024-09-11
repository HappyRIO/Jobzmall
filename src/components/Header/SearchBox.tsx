"use client";

import React, { useState, useRef, useEffect } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { menuList } from '@/data/search';

const SearchBox: React.FC = () => {
    
    let allSuggestions:string[] = [];
    let allDescriptions:string[] = [];
    menuList.map((item) => {
        allSuggestions.push(item.title)
        allDescriptions.push(item.description)
    })
    const [inputValue, setInputValue] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>(allSuggestions);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for the dropdown

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        if (value) {
            const filteredSuggestions = allSuggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
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
                className="flex w-full p-2 pl-10 pr-10 rounded-full bg-gray-200 outline-blue-200 outline-8 cursor-pointer"
                aria-autocomplete="both"
                id="autocomplete-17-input"
                placeholder="Search jobs, companies, and more..."
                type="search"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onClick={handleInputFocus}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <SearchOutlinedIcon/>
            </span>
            {isDropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
                    <div className='bg-slate-200 px-4 py-1.5 font-medium text-sm'>Quick actions</div>
                    {suggestions.map((suggestion, idx) => (
                        <div key={suggestion} className='flex items-center px-7 py-5 hover:bg-gray-200 cursor-pointer'>
                            <div className='pr-7 text-blue-500'><LocalMallOutlinedIcon/></div>
                            <div>
                                <div                                  
                                    className="text-lg font-medium"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </div>
                                <div className='text-gray-600 text-sm'>{menuList.find(item => item.title === suggestion)?.description || ''}</div>
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBox;
