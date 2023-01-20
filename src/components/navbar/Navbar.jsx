import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";
import { DataMenu } from './DataMenu';
const Navbar = () => {
  const [active ,setActive] = useState('navBar')
  const showNav =() =>{
    setActive('navBar activeNavbar')
}
const removeNavbar =() =>{
  setActive('navBar ')
}
  return (
    <>
   <section>
    <header className='header flax'>
      <div className='logo'>
        <Link className ="logo flex">
          <h1><MdOutlineTravelExplore className='icon'/>Travel.</h1>
        </Link>
      </div>
      <div className={active}>
        <ul className='navLists flex'>
          {DataMenu.map((item,index) =>{
            return (
              <li key={index} className ="navItem"><Link to ={item.url} className = {item.cName} >{item.title}</Link></li>
              )
            })}
            <button className='btn'>
              <Link>BOOK NOW</Link>
            </button>
        </ul>
        <div onClick={removeNavbar} className='closeNavbar'>
          <AiFillCloseCircle className = "icon"/>
        </div>
      </div>
      <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className = "icon"/> 
      </div>
    </header>
   </section>
    </>
  )
}

export default Navbar