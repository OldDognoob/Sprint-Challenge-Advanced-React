import React, {useState} from 'react';
import {useDarkMode} from'../hooks/useDarkMode';

export default function Navbar(props){
    const[darkMode, setDarkMode]=useDarkMode();

    const toggleMode = event =>{
        event.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className="target">
            <nav>
                <button 
                className={darkMode ? 'toggle toggled' : 'toggle'} 
                onClick={toggleMode}>
                    Dark Mode
                    </button>
            </nav>
        </div>
    );
}
