import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Forms from "./Componentes/TaskMain";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faFolderOpen, faUserGroup, faShop, faTv, 
  faBookBookmark, faFlagCheckered, faCalendar, faEarthAmericas} from '@fortawesome/free-solid-svg-icons';


import TaskList from "./Componentes/TaskList";

function Dashboard() {
  
  

 
const [user, loading, /*error*/] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (error) {
      console.error(error);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading, navigate]);
  return (
    <div className="dashboard">
      <div className="App">
      
       <div className="nav-bar">
          <form className="search">
            <input type="text" placeholder="Buscar..." className="input"></input>
          </form>
          <div className="dashboard__container">
         <button className="dashboard__btn" onClick={logout}>
          Log-out
         </button>
       </div>
      </div>

        <div className="seccion-1">

        <button className="botones-izq"> <FontAwesomeIcon className='icono1' icon={faUser}/>     Amigos</button>
        <button className="botones-izq"><FontAwesomeIcon className='icono1' icon={faFolderOpen}/>     Más recientes</button>
        <button className="botones-izq"><FontAwesomeIcon className='icono1' icon={faUserGroup}/>     Grupos</button>
        <button className="botones-izq"><FontAwesomeIcon className='icono1' icon={faShop}/>     MarketPlace</button>
        <button className="botones-izq"><FontAwesomeIcon className='icono1' icon={faTv}/>     Watch</button>
        <button className="botones-izq"><FontAwesomeIcon className='icono1' icon={faBookBookmark}/>     Guardados</button>
        <button className="botones-izq"><FontAwesomeIcon className='icono1' icon={faFlagCheckered}/>     Paginas</button>
        <button className="botones-izq"><FontAwesomeIcon className='icono1' icon={faCalendar}/>     Eventos</button>  
        <button className="botones-izq"><FontAwesomeIcon className='icono1' icon={faEarthAmericas}/>     Trabajo</button>
      
        
            
        </div>

        <div className="seccion-2">
        <Forms/>
        <TaskList/>
        
        </div>

        <div className="seccion-3">
           
        </div>
        </div>
       </div>
     
  );
}
export default Dashboard;