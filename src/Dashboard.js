import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
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
    } catch (err) {
      console.error(err);
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
          Logout
         </button>
       </div>
      </div>

        <div className="seccion-1">
            <button name="button">Click 1</button>
            <button name="button">Click 2</button>
            <button name="button">Click 3</button>
            <button name="button">Click 5</button>
            <button name="button">Click 6</button>
        </div>

        <div className="seccion-2">
          <div className="Publicaciones">
            hellow
          </div>
        </div>

        <div className="seccion-3">
            <button name="button">Click 1</button>
            <button name="button">Click 2</button>
            <button name="button">Click 3</button>
            <button name="button">Click 5</button>
            <button name="button">Click 6</button> 
        </div>
        </div>
       </div>
     
  );
}
export default Dashboard;