import React from "react";
import "./Card.css";


export default function Card ({ name, img, temperament, weight}){
    
    return(
        
        <div className="cards">
            <img className="image" src={img} alt="img not found" width="200px" height="250px"/>
            <h3 className="name">{name}</h3>
            <h4>weight {weight}</h4>
            <div className="temper">
            <h4 >{temperament?.map(el => <h5> {el} </h5>)}</h4>    
            </div>
        </div>
    );
}