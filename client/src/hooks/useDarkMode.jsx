import React, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode(){
    const[darkMode, setDarkMode] = useLocalStorage("enabled", false);

    useEffect(() =>{
        const body = document.querySelector("body");
        if(darkMode === true){
            body.classList.add("darkMode")
        }else{
            body.classList.remove("darkMode")
        }
    },[darkMode, setDarkMode])

    return [darkMode, setDarkMode];
}