import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css';


const Header = () => {
   const [activeTab, setActiveTab] = useState("Home");
   const location = useLocation();
   useEffect(() => {
      if (location.pathname === "/") {
         setActiveTab("Home")
      }
      else if (location.pathname === "/add") {
         setActiveTab("AddProduct")
      }
      else if (location.pathname === "/signin") {
         setActiveTab("Signin")
      }
      else if (location.pathname === "/login") {
            setActiveTab("Login")
      }
      else if (location.pathname === "/about") {
         setActiveTab("About")
      }
      else if (location.pathname === "/view") {
         setActiveTab("View")
      }
      
      
   }, [location]);

   return (
      <div className='header'>
         <p className='logo'> FOODHUB APP </p>
         <div className='header-right'>
            <Link to= "/">
               <p className={`${activeTab === "Home"? "active" : ""}`} 
               onClick={()=> setActiveTab("Home")}
               > Home </p>
            </Link>

            <Link to= "/add">
               <p className={`${activeTab === "AddProduct"? "active" : ""}`} 
               onClick={()=> setActiveTab("AddProduct")}
               > Add Product </p>
            </Link>

            <Link to= "/signup">
               <p className={`${activeTab === "Signup"? "active" : ""}`} 
               onClick={()=> setActiveTab("Signup")}
               > Signup </p>
            </Link>
            <Link to= "/login">
               <p className={`${activeTab === "Login"? "active" : ""}`} 
               onClick={()=> setActiveTab("Login")}
               > Login </p>
            </Link>
            <Link to= "/view">
               <p className={`${activeTab === "View"? "active" : ""}`} 
               onClick={()=> setActiveTab("View")}
               > Edit List </p>
            </Link>
         
         </div>
         
      </div>
   )
}

export default Header
