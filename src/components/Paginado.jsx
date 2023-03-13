import React from "react";
import './Paginado.css';

export default function Paginado ({dogsPerPage, allDogs,paginado}){
    const pageNumbers = []

    for (let i = 0; i <= Math.ceil(allDogs/dogsPerPage)-1; i++){
        pageNumbers.push(i+1)
    }

    return (
        <nav>
            <ul >
                 {pageNumbers && 
                pageNumbers.map(number =>(
                    <li  key={number} className='buttonpage0'>
                    <a onClick={()=> paginado(number)} className='numero' > {number}</a>
                    </li>
                ))}  
            </ul>
        </nav>
    )
}