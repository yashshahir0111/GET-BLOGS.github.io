import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css';
import { useNavigate} from "react-router-dom";



let cardStyle1 = {
  width: "573px",
  height: "560px",
  borderRadius: "1rem",
}

let cardStyle2 = {
  width: "573px",
  height: "268px",
  borderRadius: "1rem",
}

let cardStyle3 = {
  width: "274.5px",
  height: "268px",
  borderRadius: "1rem",
}

let cardStyle4 = {
  width: "274.5px",
  height: "268px",
  borderRadius: "1rem",
}

let imageStyle1 = {

  width: "573px",
  height: "560px",
  borderRadius: "1rem",
  borderCollapse: "collapse"


}

let imageStyle2 = {
  width: "573px",
  height: "268px",

  borderRadius: "1rem",
  borderCollapse: "collapse"

}
let imageStyle3 = {
  width: "274.5px",
  height: "268px",

  borderRadius: "1rem",
  borderCollapse: "collapse"

}
let imageStyle4 = {
  width: "274.5px",
  height: "268px",
  borderRadius: "1rem",
  borderCollapse: "collapse"

}



let buttonn = {

  /*position: "absolute",
  bottom: "80px",
  right: "30px",*/
  backgroundColor: " transparent",
  color: "dodgerblue",
  border: "transparent"
  

}

let stylecard = {

  width: "362px",
  height: "451px",

  borderRadius: "1rem",
  borderCollapse: "collapse"


}


let categoriee={
  width:"270px",
  height:"100px",
  border:"1px solid dodgerblue",
  marginLeft:"193px",
 /* marginRight:"1000px"*/
}

let categorieeimg={

  width:"271px",
  height:"101px",
  border:"2px solid dodgerblue"
}

export default function Home() {

  const navigate = useNavigate();

  let abc = [];
  let latest1 = [];
  let latest2 = [];
  let latest3 = [];
  let latest4 = [];
  let categorie1 = [];
  let categorie2 = [];
  let categorie3 = [];
  let categorie4 = [];



  categorie1.push(<>
    <Card style={categoriee}>
  
  <Card.Img src="https://wallpaperaccess.com/full/1679742.jpg" style={categorieeimg} className="card card-dark" />
  <Card.ImgOverlay>
    <Card.Title>
      <button className='btn-link stretched-link text-reset-white' style={buttonn} onClick={() => { navigate(`/home/blog/${"Movies"}`)}} > Movies</button>
  
    </Card.Title  >
  
  </Card.ImgOverlay>
  </Card>
    
    </>
  );
  categorie2.push(<>
  <Card style={categoriee}>

<Card.Img src="https://wallpaperaccess.com/full/1553379.jpg" style={categorieeimg} className="card card-dark" />
<Card.ImgOverlay>
  <Card.Title>
    <button className='btn-link stretched-link text-reset-white' style={buttonn} onClick={() => { navigate(`/home/blog/${"Life-Style"}`)}} > Life-Style</button>

  </Card.Title  >

</Card.ImgOverlay>
</Card>
  
  </>
);
categorie3.push(<>
  <Card style={categoriee}>

<Card.Img src="https://wallpaperaccess.com/full/186274.jpg" style={categorieeimg} className="card card-dark" />
<Card.ImgOverlay>
  <Card.Title>
    <button className='btn-link stretched-link text-reset-white' style={buttonn} onClick={() => { navigate(`/home/blog/${"Technology"}`)}} > Technology</button>

  </Card.Title  >

</Card.ImgOverlay>
</Card>
  
  </>
);
categorie4.push(<>
  <Card style={categoriee}>

<Card.Img src="https://wallpaperaccess.com/full/1772247.jpg" style={categorieeimg} className="card card-dark" />
<Card.ImgOverlay>
  <Card.Title>
    <button className='btn-link stretched-link text-reset-white' style={buttonn} onClick={() => { navigate(`/home/blog/${"Education"}`)}} > Education</button>

  </Card.Title  >

</Card.ImgOverlay>
</Card>
  
  </>
);

  for (let keyValue = localStorage.length; keyValue >= 1; keyValue--) {


    const displ = [JSON.parse(localStorage.getItem(keyValue))]
    let imgsrc;

    if (keyValue === localStorage.length) {
    
      let valu = keyValue;
     

      { displ.map(dataa => { imgsrc = dataa.url }) }


      latest1.push(
        <>
       
          <Card className="bg-dark text-white  " style={cardStyle1}>

            <Card.Img src={imgsrc} style={imageStyle1} />
            <Card.ImgOverlay>
              <Card.Title>
                 <button className='btn-link stretched-link text-reset' style={buttonn} onClick={() => { navigate(`/home/blog/${valu}`)}}> {displ.map(dataa => (<h1 /*key={keyValue}*/> {dataa.titl} </h1>))}</button>
                
              </Card.Title  >

            </Card.ImgOverlay>
          </Card>
        
        </>

      );
    }

    else if (keyValue === localStorage.length - 1) {

      { displ.map(dataa => { imgsrc = dataa.url }) }


      latest2.push(
        <Card className="bg-dark text-white  " style={cardStyle2}>

          <Card.Img src={imgsrc} style={imageStyle2} />
          <Card.ImgOverlay>
            <Card.Title>
              <button className='btn-link stretched-link text-reset' style={buttonn} onClick={() => { navigate(`/home/blog/${keyValue}`)}}> {displ.map(dataa => (<h1 key={keyValue}> {dataa.titl} </h1>))}</button>

            </Card.Title  >

          </Card.ImgOverlay>
        </Card>

      );
    }
    else if (keyValue === localStorage.length - 2) {

      { displ.map(dataa => { imgsrc = dataa.url }) }


      latest3.push(
        <Card className="bg-dark text-white  " style={cardStyle3} >

          <Card.Img src={imgsrc} style={imageStyle3} />
          <Card.ImgOverlay>
            <Card.Title>
              <button className='btn-link stretched-link text-reset' style={buttonn} onClick={() => { navigate(`/home/blog/${keyValue}`)}} > {displ.map(dataa => (<h3 key={keyValue}> {dataa.titl} </h3>))}</button>

            </Card.Title  >

          </Card.ImgOverlay>
        </Card>

      );
    }

    else if (keyValue === localStorage.length - 3) {

      { displ.map(dataa => { imgsrc = dataa.url }) }


      latest4.push(
        <Card className="bg-dark text-white  " style={cardStyle4}>

          <Card.Img src={imgsrc} style={imageStyle4} />
          <Card.ImgOverlay>
            <Card.Title>
              <button className='btn-link stretched-link text-reset' style={buttonn} onClick={() => { navigate(`/home/blog/${keyValue}`)}} > {displ.map(dataa => (<h3 key={keyValue}> {dataa.titl} </h3>))}</button>

            </Card.Title  >

          </Card.ImgOverlay>
        </Card>

      );
    }

    else {

      { displ.map(dataa => { imgsrc = dataa.url }) }


      abc.push(


        <Card className="bg-dark text-white  " style={stylecard} >

          <Card.Img src={imgsrc} className="imgCard" />
          <Card.ImgOverlay>
            <Card.Title>
              <button className='btn-link stretched-link text-reset' style={buttonn} onClick={() => { navigate(`/home/blog/${keyValue}`)}} > {displ.map(dataa => (<h1 key={keyValue}> {dataa.titl} </h1>))}</button>

            </Card.Title  >

          </Card.ImgOverlay>
        </Card>)
    }
  }   //for loop


  return (<>
  <div className='textt'>
  <h1 >Categorie</h1>
     <div className="containerCat">
  <div className="cat1">{categorie1}</div>
  <div className="cat2">{categorie2}</div>
  <div className="cat3">{categorie3}</div>
  <div className="cat4">{categorie4}</div>
</div>
<h6>.</h6>
<h6>.</h6>
  <h1> Latest top highlights</h1><div className="container">

    <div className="col1">{latest1}</div>
    <div className="col2">{latest2}</div>
    <div className="row2">
      <div className="row2col1">{latest3}</div>
      <div className="row2col2">{latest4}</div>
    </div>
  </div>
  <h6>.</h6>
  <h6>.</h6>
    <h1> BLOGS </h1>
    <div className='cards'>{abc}</div> </div></>
  )

}














/* const displ = [JSON.parse(localStorage.getItem(1))] 
  <div page-container content-wrap> {displ.map(dataa  =>(
    <p key={0}>
     <h4> {dataa.titl} </h4>      
      {dataa.bodyy}
     </p>

  ))}


   <Card className="bg-dark text-white "  style={myStyle}>
    
        <Card.Img src="https://img.freepik.com/free-photo/night-view-victoria-harbor-hong-kong_53876-146261.jpg?w=1380&t=st=1659448250~exp=1659448850~hmac=64e2ff766ae8321eaaedf1b29def1d5b190fee8e706cb4a4a44baa1e9c9ab9f7/20px40"  style={myStyleImg}/>
        <Card.ImgOverlay>
          <Card.Title><h1>title</h1>
          {displ.map(dataa  =>(<h1 key={1}> {dataa.titl} </h1> )) }
          </Card.Title>
          
        </Card.ImgOverlay>
        <button variant="link" style={buttonn}  >hi</button>
      </Card> 
*/