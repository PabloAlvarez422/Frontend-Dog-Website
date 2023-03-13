import React,{useState,useEffect} from "react";
import {Link,useHistory} from 'react-router-dom';
import {postDog, getTemperaments} from '../actions/index';
import {useDispatch,useSelector} from 'react-redux';
import './DogCreate.css'

export default function DogCreate(){
    useEffect(()=> {
        dispatch(getTemperaments());    
    });

    const dispatch = useDispatch()
    const history = useHistory()
    const temperaments = useSelector((state) => state.temperaments)
    const [errors,setErrors] = useState({});


    const [input,setInput] = useState ({
        name: "",
        img: "", 
        height: "",
        weight: "",
        lifeSpan:"",
        temperaments: []
  })

  function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value    
    })
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }));    
}

function handleSelect(e){ 
    (e).preventDefault()
    setInput({
        ...input,
        temperaments: [...input.temperaments,e.target.value]
    })
}
function handleSubmit(e){
    e.preventDefault();
    
    dispatch(postDog(input))
    alert('Dog created!')
    setInput({
        name: "",
        img: "", 
        height: "",
        weight: "",
        lifeSpan:"",
        temperaments: []
    })
    history.push('/home')
}

function validate(input){
    let errors = {};
    if(!input.name) errors.name = 'name is required';
    else if (!input.height) errors.height = 'height is required';
    else if (!input.weight) errors.weight = 'weight is required';
    else if (!input.lifeSpan) errors.lifeSpan = 'lifeSpan is required';
    else if (!input.temperaments) errors.temperaments = 'temperament is required';
    return errors;
}


return(
    <div>
        <Link to= '/home'  style={{ textDecoration: 'none' }}><button className="buttonpage6">return</button></Link>
        <h1 className="titulo4">Create Your Dog</h1>
        <form onSubmit={(e) =>handleSubmit(e)} className="buttonpage5">
            <div>
                <label>Name:</label>
                <input
                type="text"
                value={input.name}
                name="name"
                onChange={(e) =>handleChange(e)}
                />
                {errors.name &&(
                    <p>{errors.name}</p>
                )}
            </div>
            <div>
                <label>Height:</label>
                <input
                type="number"
                value={input.height}
                name="height"
                onChange={(e) =>handleChange(e)}
                />
                {errors.height &&(
                    <p>{errors.height}</p>
                )}
            </div>
            <div>
                <label>Weight:</label>
                <input
                type="number"
                value={input.weight}
                name="weight"
                onChange={(e) =>handleChange(e)}
                />
                {errors.weight &&(
                    <p>{errors.weight}</p>
                )}
            </div>
            <div>
                <label>Image:</label>
                <input
                type="text"
                value={input.img}
                name="img"
                onChange={(e) =>handleChange(e)}
                />
            </div>
            <div>
                <label>Life Span:</label>
                <input
                type="text"
                value={input.lifeSpan}
                name="lifeSpan"
                onChange={(e) =>handleChange(e)}
                />
                {errors.lifeSpan &&(
                    <p>{errors.lifeSpan}</p>
                )}
            </div>
            <select onChange={handleSelect}>
                {temperaments?.map((t) => (
                    <option value={t.name}>{t.name}</option>
            ))}
            </select >
            <ul><li className="temperaments">{input.temperaments.map(el => el + " - ")}</li></ul> 
            
            {input.name && input.weight && input.height && input.lifeSpan && input.temperaments && (<button type='submit' className='buttonpage7'>Create</button>)}            
        </form>
    </div>
)
}