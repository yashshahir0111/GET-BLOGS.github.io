//import logo from './logo.svg';
import './App.css';
import Aboutus from './Aboutus';
import React,{Component} from 'react';
import AddForma from './AddForm.js';
import Navbar from './Navbar';
import Footera from './Footera';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import DisplayCard from './DisplayCard';


class App extends Component
{
   render() 
    {
       return (
   <>
          <div  className ="App   " >
          
              <Router >
                  <Navbar/>
                      <Routes>

                            <Route path="Aboutus"  element={<Aboutus/>}/>
                            <Route path="/"  element={<Home/>}/>

                            <Route path="/home"  element={<Home />}  exact />

                                 <Route path="/home/blog/:id" element={<DisplayCard/>}   />
                               
                           
                          
                            <Route path="AddForma"   element={<AddForma />}/>

                     </Routes> 
                  <Footera/>
             </Router>
         </div>
         </>
       );
    }
}
export default App;
