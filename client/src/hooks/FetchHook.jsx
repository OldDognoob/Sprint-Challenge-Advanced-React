import React,{useState, useEffect} from 'react';
import axios from 'axios';

export const FetchHook =(url) =>{
    const [players,setPlayers]=useState();

    useEffect(() =>{
        axios.get(url)
        .then(response =>{
            setPlayers(response.data)
            console.log(response)
        })
        .catch(error =>{
            console.log(`You hit an:${error}`)
        })
    }, [url])

    return [players];
}