import { Link, useNavigate, useParams  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {  toast } from 'react-toastify';
import axios from 'axios';
function Edituser() {

    const {id}= useParams()
    console.log("get id", id);
    let navigate=useNavigate()
    
    const [user,setUser]=useState(
      {
        name:"",
        email:"",
        address:""
      }
    )
   
    const {name,email,address}=user
    
    const changeValue=(e)=>(
    setUser({...user,[e.target.name]:e.target.value})
    )

    useEffect(()=>{
  
      loadUser();
    
    },[]);
     const onSubmit= async (e)=>{
    
    e.preventDefault()
  await  axios.put(`http://localhost:8080/employee/update/${id}`,user)
    navigate("/")
    toast.success("cap nhat thanh cong");
    }
  
    const loadUser=async()=>{
      const result= await axios.get(`http://localhost:8080/employee/get/${id}`);
      console.log(result.data);
      setUser(result.data);
    }
    
    return (  
      <div className='mt-5'>
      <h3 style={{color:'red'}} className="text-center">Thêm Nhân Viên</h3>
       
              <div className="container">
                  <div className="row ">
                   
                      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                          
                      <form className="form-inline" onSubmit={(e)=>onSubmit(e)}>
                      <div className="form-group">
            <label className="form-label mt-3" >Name:</label>
              <input type="text" className="form-control"  placeholder="Enter name" name="name"
               value={name}
              onChange={(e)=>changeValue(e)}
              
              />
            </div>
            <div className="form-group">
            <label className="form-label mt-3" >Email:</label>
              <input type="email" className="form-control"  placeholder="Enter email" name="email" 
               value={email}
               onChange={(e)=>changeValue(e)}
            
            
            />
            </div>
            <div className="form-group">
            <label className="form-label mt-3" >Address</label>
              <input type="text" className="form-control"  placeholder="Enter Adress" name="address"
             
             value={address}
             onChange={(e)=>changeValue(e)}/>
            </div>
            <div className="form-group mt-4 text-center">
           <button type='submit' className="style btn btn-outline-success">Add</button>
            <Link type="button" className="style btn btn-outline-danger" to="/">Cancel</Link>
           </div>
            </form>
           </div>
         
                      
                    
                  </div>
              </div>
             
              </div>
    );
}

export default Edituser;