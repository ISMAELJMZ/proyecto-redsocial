import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./TaskMain.css";
import {v4 as uuid} from 'uuid'
import {useState, useEffect} from 'react'
import {addTask} from '../features/tasks/taskSlice'
import { useParams } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faImage,  faFaceLaughBeam} from '@fortawesome/free-solid-svg-icons';


 
function Forms() {

const [task, setTask]= useState({
  title: '', 
  description: 'Panel de publicaciones',
  img: ''
})
 
const params = useParams()
const dispatch = useDispatch()
const tasks = useSelector(state => state.tasks )

const handleChange = e =>{ 
 setTask ({
  ...task, 
  [e.target.name]: e.target.value,
  });
  
};

const handleSubmit = (e) => {
  e.preventDefault()
 
  dispatch(addTask({
    ...task, 
    id:uuid(),
    
 }))


 
}

useEffect( ()=> {
  if (params.id){
   setTask( tasks.find((task) => task.id === params.id));
  }

}, [])


return(
  
    <div className='Box-item'>
    <div className='image-user'></div>
    
    <input className='input-form' 
    type="text"
    name='title'
    placeholder='¿Cuentanos tu como te sientes? '
    onChange={handleChange}/> 
    

    <hr className='hr'/>

    <button  className='button' onClick={handleSubmit}> <FontAwesomeIcon className='icono1' icon={faPlusSquare}/>  Crear publicacion </button>
    
    <button  className='button' ><FontAwesomeIcon className='icono2' icon={faImage}/>  Foto / video</button>
    {/*<input type='file' /> */}
   
    <button  className='button'><FontAwesomeIcon className='icono3' icon={faFaceLaughBeam}/>  Feeling / activity </button>

      
    </div>
  )
}


export default Forms;