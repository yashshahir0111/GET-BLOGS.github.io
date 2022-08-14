import React, {  useState } from 'react'
import {
   Link,useNavigate
} from "react-router-dom";



export default function Navbar() {
  

const [inp,setinp] = useState('');
console.log(inp)

const navigate = useNavigate();


  const SearchBtn=(e)=>{
      
let key;
let alertt = 1;
for ( key = 1; key <= localStorage.length; key++) {
  
  

    let check;
   
  const displ = [JSON.parse(localStorage.getItem(key))]
  displ.map(dataa => { check = dataa.titl })
  
   check = check.toLowerCase();
  let  inpS = inp.toLowerCase();
  if (check === inpS) {
    alertt=0;
   console.log("works");
   navigate(`/home/blog/${key}`);
  }
 
    }
    if (alertt === 1) {
      alert("Blog not found or incorrect title");
    }
  
}; 

 


   
  return (
    <div>
        
      <nav className="navbar navbar-expand bg-dark text-light py-3 navcss">
  <div className="container-fluid">
    <Link className="navbar-brand  "   to="home">GET BLOGS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="AddForma">CREATE BLOG</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Aboutus">About US</Link>
        </li>
       
        
        
      </ul>
      <form className="d-flex" placeholder="Search" >
      <input  placeholder="Search"   value={inp} onChange={(e) => setinp(e.target.value)}/>
           <button className="btn btn-outline-success" onClick={SearchBtn}>Search</button>
      </form>
    </div>
  </div>
</nav>

            </div>
   
  )
  }
 
