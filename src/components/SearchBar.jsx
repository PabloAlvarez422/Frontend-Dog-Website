import React from 'react';
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { getNameDogs } from '../actions';
import './SearchBar.css'


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name,setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameDogs(name))
        
    }

    return(
        <div className='Search'>
            <input
            type = 'text'
            placeholder="Name"
            onChange={(e) => handleInputChange(e)}
            className='buttonpage9'/>
            <button type='submit' onClick={(e)=> handleSubmit(e)} className='buttonpage10'>Search</button>
        </div>
    )
}