import React from "react";
import {Link} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {getDetail} from "../actions/index";
import { useEffect } from "react";
import './Detail.css';

export default function Detail(props){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch,props.match.params.id]);

    const myDog = useSelector((state)=> state.detail)
    
    return (
        <div>
            <div>
                {myDog.length > 0 ?
                <div className="card">
                    <img className="imag"src={myDog[0].img} alt={'img not found'}/>
                    <h1>Name: {myDog[0].name}</h1>   
                    <h3>Height: {myDog[0].height}</h3>
                    <h3>Weight: {myDog[0].weight}</h3>
                    <h3>Life Span: {myDog[0].lifeSpan}</h3>
                    <h2>Temperament: {myDog[0].temperament?.map(t => t + (' ')) || myDog[0].temperaments?.map(t => t + (' ')) }</h2>

                </div > : <div className="titulo2">
                    <p class='busc'>Search Dog...</p>
                    <span class="loader"></span>
                  </div>
                }
            </div>
        <Link to= '/home'   style={{ textDecoration: 'none' }}>
            <button className='buttonpage10'>Return</button>
        </Link>
        </div>
    )
}