import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Searchcontext } from './Searchtext';
import { useRef } from 'react';
import axios from 'axios';



function Navheader() {









const ref=useRef()

useEffect(()=>{
  ref.current.focus()
 
 

},[]);



const {setKeyword} = useContext(Searchcontext)

const[text,setText]=useState("")


const handClick=(e)=>{

e.preventDefault()
setKeyword(text)

}
const handDelete=(e)=>{

  e.preventDefault()
  ref.current.value = ''
  setKeyword('')
  ref.current.focus()
  }
  


return (

          <nav className="navbar navbar-expand-lg bg-success navbar-info">
        <div className="container-fluid">
        <Link  to="/adduser"   className="btn btn-warning" >Add</Link>
        <p style={{color:'yellow',marginBottom:'0px'}}>Design by Quyen Nguyen</p>
            <form className="d-flex" role="search">   
              <input className="form-control me-2" type="text" placeholder="Search"
               onChange={(e)=>setText(e.target.value)} 
             ref={ref}
              />
          <button type='submit' onClick={handClick}>Search</button>
          <button type='submit' onClick={handDelete}>Reset</button>
       
            </form>
  
        </div>
      
      </nav>
   


     );
}

export default Navheader;