import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getDogs,filterDogsByTemperament,filterDogsByOrigin,orderByName,orderByWeight,orderByHeight} from "../actions";
import {Link} from 'react-router-dom';
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import './Home.css'


export default function Home (){

    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage,setDogsPerPage] = useState (8)
    const indexOfLastDog = currentPage * dogsPerPage // 8
    const indexOfFirstDog = indexOfLastDog - dogsPerPage // 0
    const currentDogs = allDogs.slice(indexOfFirstDog,indexOfLastDog)
    
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    useEffect (()=>{
        dispatch(getDogs())
    },[dispatch])
    
    
    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }
    
    function handleFilterTemperament(e){
        dispatch(filterDogsByTemperament(e.target.value));
        setCurrentPage(1);
    }
    
    function handleFilterOrigin(e){
        dispatch(filterDogsByOrigin(e.target.value));
        setCurrentPage(1);
    }
    
    function handleOrderName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }
    
     function handleOrderWeight(e){
         e.preventDefault();
         dispatch(orderByWeight(e.target.value));
         setCurrentPage(1);
         setOrden(`Ordenado ${e.target.value}`);
         
    }
    function handleOrderHeight(e){
        e.preventDefault();
        dispatch(orderByHeight(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
   }
    
    return (
        <div>
            <img className="icon" src="https://img.freepik.com/vector-gratis/lindo-labrador-perro-sentado-dibujos-animados-vector-icono-ilustracion-animal-naturaleza-icono-concepto-aislado_138676-4332.jpg" alt="Img Not Found" width="40px" height="40px"/>
            <h1 className="titulo">Dog Website</h1> 
            <button onClick={e => {handleClick(e)}} className="buttonpage1">
                Reload Website
            </button>
            <Link to= '/dog' style={{ textDecoration: 'none' }}><button className="buttonpage1"  >Create your dog</button></Link>
            <div>
                <select onChange={e=>handleOrderName(e)} className="buttonpage1">
                    <option value= 'asc' >Ascending Alphabetical Order</option>
                    <option value= 'desc'>Descending Alphabetical Order</option>
                </select>
                <select onChange={e=>handleOrderWeight(e)} className="buttonpage1">
                    <option value= 'ascending'>Order by Weight Ascending</option>
                    <option value= 'descending'>Order by Weight Descending</option>
                </select>
                <select onChange={e=>handleOrderHeight(e)} className="buttonpage1">
                    <option value= 'ascending'>Order by Height Ascending</option>
                    <option value= 'descending'>Order by Height Descending</option>
                </select>  
                <select onChange={e => handleFilterOrigin(e)} className="buttonpage1">
                    <option value= 'all'>Origin</option>
                    <option value= 'existente'>Existing</option>
                    <option value= 'createdInDb'>Created</option>
                </select>
                <select onChange={e => handleFilterTemperament(e)} className="buttonpage1"> 
                    <option value= 'todos'>All Temperaments</option>
                    <option value= 'Stubborn'>Stubborn</option>
                    <option value= 'Adventurous'>Adventurous</option>
                    <option value= 'Curious'>"Curious</option>
                    <option value= 'Playful'>Playful</option>
                    <option value= 'Active'>Active</option>
                    <option value= 'Aloof'>Aloof</option>
                    <option value= 'Fun-loving'>Fun-loving</option>
                    <option value= 'Clownish'>Clownish</option>
                    <option value= 'Dignified'>Dignified</option>
                    <option value= 'Independent'>Independent</option>
                    <option value= 'Happy'>Happy</option>
                    <option value= 'Hardworking'>Hardworking</option>
                    <option value= 'Wild'>Wild</option>
                    <option value= 'Dutiful'>Dutiful</option>
                    <option value= 'Outgoing'>Outgoing</option>
                    <option value= 'Friendly'>Friendly</option>
                    <option value= 'Confident'>Confident</option>
                    <option value= 'Alert'>Alert</option>
                    <option value= 'Intelligent'>Intelligent</option>
                    <option value= 'Courageous'>Courageous</option>
                    <option value= 'Loyal'>Loyal</option>
                    <option value= 'Brave'>Brave</option>
                    <option value= 'Docile'>Docile</option>
                    <option value= 'Responsive'>Responsive</option>
                    <option value= 'Composed'>Composed</option>
                    <option value= 'Receptive'>Receptive</option>
                    <option value= 'Faithful'>Faithful</option>
                    <option value= 'Loving'>Loving</option>
                    <option value= 'Protective'>Protective</option>
                    <option value= 'Trainable'>Trainable</option>
                    <option value= 'Responsible'>Responsible</option>
                    <option value= 'Energetic'>Energetic</option>
                    <option value= 'Gentle'>Gentle</option>
                    <option value= 'Affectionate'>Affectionate</option>
                    <option value= 'Devoted'>Devoted</option>
                    <option value= 'Assertive'>Assertive</option>
                    <option value= 'Dominant'>Dominant</option>
                    <option value= 'Strong Willed'>Strong Willed</option>
                    <option value= 'Obedient'>Obedient</option>
                    <option value= 'Reserved'>Reserved</option>
                    <option value= 'Kind'>Kind</option>
                    <option value= 'Sweet-Tempered'>Sweet-Tempered</option>
                    <option value= 'Tenacious'>Tenacious</option>
                    <option value= 'Attentive'>Attentive</option>
                    <option value= 'Steady'>Steady</option>
                    <option value= 'Bold'>Bold</option>
                    <option value= 'Proud'>Proud</option>
                    <option value= 'Reliable'>Reliable</option>
                    <option value= 'Fearless'>Fearless</option>
                    <option value= 'Lively'>Lively</option>
                    <option value= 'Self-assured'>Self-assured</option>
                    <option value= 'Cautious'>Cautious</option>
                    <option value= 'Steady'>Steady</option>
                    <option value= 'Eager'>Eager</option>
                    <option value= 'Good-natured'>Good-natured</option>
                    <option value= 'Spirited'>Spirited</option>
                    <option value= 'Companionable'>Companionable</option>
                    <option value= 'Even Tempered'>Even Tempered</option>
                    <option value= 'Rugged'>Rugged</option>
                    <option value= 'Amiable'>Amiable</option>
                </select>
                </div>
            <Paginado
                dogsPerPage={dogsPerPage}
                allDogs={allDogs.length}
                paginado={paginado}
            />
            <SearchBar />
            <div className="dogs">
            {currentDogs.length > 0 ?
                currentDogs?.map ((el) =>{
                    return(               
                    <Link to={'/home/' + el.id} className='link'>    
                        <Card name={el.name} img={el.img ? el.img : "https://i.pinimg.com/originals/03/89/0d/03890d6e9cc0398469005e00a41edaed.png"} temperament={el.temperaments || el.temperament} id={el.id} weight={el.weight} />
                    </Link>
                    
                )}) : <div>
                        <p className="titulo2" >Search Dog</p>
                        <span class="loader"></span>
                        
                      </div>
            }
            </div>
        </div>
    )
    }

