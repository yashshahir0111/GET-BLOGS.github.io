import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css';
import {useParams}  from "react-router-dom";


let cardStyle={
  width: "1000px",
  minHeight: "1560px",
  borderRadius: "2rem",
  marginLeft: "257px"
}

let cardimg={

  width: "1000px",
  minHeight: "1560px",
  borderRadius: "2rem",
 
}
let cardBody={

  width: "1000px",
  minHeight: "1560px",
  borderRadius: "2rem",
 
}

export default function DisplayCard() {
  let disp =[];
  let dispCat = [];
   let imgsrc;
   let categore;
   let index;
   const {id} = useParams();
  console.log(id);


  if ( id  < 1000) {
    
  
   const displ = [JSON.parse(localStorage.getItem(id))]
   displ.map(dataa => { imgsrc = dataa.url })
   
   disp.push(<>
   <Card className="bg-dark text-white  " style={cardStyle}>

   <Card.Img src={imgsrc}   style={cardimg}/>
   <Card.ImgOverlay>
     <Card.Title>
     <div><div>   {displ.map(dataa => (<h1 key={0} > {dataa.titl} </h1>))}</div></div>

     </Card.Title  >
     <Card.Body  style={cardBody}>
     <div><h2>{displ.map(dataa => (<p key={0} > {dataa.bodyy} </p>))}</h2></div>
     </Card.Body>
   </Card.ImgOverlay>
 </Card></>)}
 
else{
  for ( index = 1; index <= localStorage.length; index++) {

   
    const displ = [JSON.parse(localStorage.getItem(index))]
    displ.map(dataa => {  categore = dataa.categorie })
console.log(id);


      let idS = id.toLowerCase();
      let categoreS = categore.toLowerCase();
    if (idS === categoreS) {
      console.log("works");
      displ.map(dataa => { imgsrc = dataa.url })
      dispCat.push(<>
        <Card className="bg-dark text-white  " style={cardStyle}>
     
        <Card.Img src={imgsrc}   style={cardimg}/>
        <Card.ImgOverlay>
          <Card.Title>
          <div><div>   {displ.map(dataa => (<h1 key={0} > {dataa.titl} </h1>))}</div></div>
           <div><h2>{categore}</h2></div>
          </Card.Title  >
          <div><h2>{displ.map(dataa => (<p key={0} > {dataa.bodyy} </p>))}</h2></div>
     
        </Card.ImgOverlay>
      </Card>
      <div ><h1 className=' space'>. </h1></div>
      <div><h1 className=' space'> .</h1></div>
     
      </>)
    }
  

 }}

    

  return (

<>
<div>{disp}</div>
<div className='dcc'>{dispCat}</div></>





/*
    <Card className="bg-dark text-white  " style={cardStyle}>

      <Card.Img src={imgsrc}   style={cardimg}/>
      <Card.ImgOverlay>
        <Card.Title>
        <div><div>   {displ.map(dataa => (<h1 key={0} > {dataa.titl} </h1>))}</div></div>

        </Card.Title  >
        <div><h2>{displ.map(dataa => (<p key={0} > {dataa.bodyy} </p>))}</h2></div>

      </Card.ImgOverlay>
    </Card>
*/

  )
}
