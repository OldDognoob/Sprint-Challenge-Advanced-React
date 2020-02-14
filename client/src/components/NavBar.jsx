import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

export default function Navbar() {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleDarkMode = event =>{
        event.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <div className="navbar">
            <button className={darkMode ? 'toggle toggled' : 'toggle'}onClick ={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
    )
}
