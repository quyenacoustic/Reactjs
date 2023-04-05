import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { useContext } from 'react';
import { Searchcontext } from './Searchtext';
import axios from 'axios';
import './style.css';


function Home() {

  const {keyword} = useContext(Searchcontext)
  console.log(keyword);

const [users,setUsers]=useState([]);






// let {id} = useParams()
useEffect(()=>{
  
 loadUsers();
  

},[]);
useEffect(()=>{
 
  kt();

},[keyword]);
const loadUsers = async()=>{
  const result= await axios.get("http://localhost:8080/employee/get");

  setUsers(result.data);
}

const kt= async(value)=>{
  if(keyword == ""){
return loadUsers()
  }
  if(keyword !== ""){

   const kq = await axios.get(`http://localhost:8080/employee/search/${keyword}`);
    setUsers(kq.data);
    return value
  }
}



const deleteUser= async(id)=>{

 await axios.delete(`http://localhost:8080/employee/${id}`);

 loadUsers()
toast.success("xoa thanh cong");
}


    return ( 
<div>
  <h3 style={{color:'red'}} className='text-center'>Danh Sách Nhân Viên</h3>


<div className="container mt-5">
 
    <table className="table border shadow text-center">
  <thead>
    <tr>
      <th scope="col">Stt</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {

// users.filter((value)=>{
// if(search===""){
//   return value
// }
// else if(value.name.toLowerCase().includes(search.toLowerCase())){


//   return value
// }
// })


 users .map((user,index) =>(
      
<tr >
 
      <th scope="row" key={index} >{index+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>
      <button type="button" className="style btn btn-primary">View</button>
      <Link className="style btn btn-outline-info" to={`/edituser/${user.id}`}  >  Edit</Link>
      <button onClick={(id)=>deleteUser(user.id)} className="style btn btn-danger">Delete</button>
      </td>
      
    </tr>

    ))
  }

    
  </tbody>
</table>
    </div>
   
    </div>    




     );
}

export default Home;