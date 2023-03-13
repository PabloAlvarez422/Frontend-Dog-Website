import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getDogs } from "../actions";
import { useState, useEffect } from "react";
import './LandingPage.css';

export default function LandingPage(){

    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    
    useEffect (()=>{
        dispatch(getDogs())
    },[dispatch])
    

    return(
        <div className='h1'>
            <h1>Welcome to the Dog Website</h1>
            <Link to = '/home' style={{ textDecoration: 'none' }} >
                <button className='buttonpagee' >Get Into</button>
            </Link>
        </div>
    )
}