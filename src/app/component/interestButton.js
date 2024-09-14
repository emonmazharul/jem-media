'use client'
import { useState,useEffect,useRef } from "react";

export const InterestButton = ({setting_interest, interest ,item}) => {
    const btnRef = useRef(null);
    useEffect(() => {
        if(interest.includes(item)) {
            console.log('code goes hre')
            btnRef.current.style.backgroundColor = 'rgba(64, 224, 208, 1)';
            return;
        }
        btnRef.current ? btnRef.current.style.backgroundColor = 'rgba(0, 0, 90, 1)' : null
    }, [interest,item])

    return <button 
        ref={btnRef}
        onClick={() => setting_interest(item)}
        name="interest" 
        type="button" 
        value={item}
        className={`py-2 px-4 mb-4 mr-4 md:mr-4 md:mb-4 md:px-4 md:py-2 border border-colorTwo text-white rounded-[8px] hover:bg-colorTwo`} 
        key={item}
    >
        {item}
    </button>
}