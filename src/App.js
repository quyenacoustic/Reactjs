import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import './App.css';

import Adduser from './Crud/Adduser';
import Edituser from './Crud/Edituser';
import Home from './Crud/Home';
import Nav  from './Crud/Nav.js';
function App() {

  

  


  return (
    <div className="App">
    
     <Nav
     />
     <ToastContainer 
      position="top-center"
      autoClose={1000}
      

     />
     <hr/>
<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/adduser" element={<Adduser/>}></Route>
<Route path="/edituser/:id" element={<Edituser/>}></Route>

</Routes>




    </div>
  );
}

export default App;
