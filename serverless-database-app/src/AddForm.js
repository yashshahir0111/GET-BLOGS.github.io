import React, { Component } from 'react';


let sno = localStorage.length;


export default class AddForm extends Component {



  constructor() {

    super();

    this.onchangetitl = this.onchangetitl.bind(this);
    this.onchangebodyy = this.onchangebodyy.bind(this);
    this.onchangeurl    = this.onchangeurl.bind(this);
    this.onchangecategorie=this.onchangecategorie.bind(this);
  
    this.Submitt = this.Submitt.bind(this);
    this.state =
    {

      titl: '',
      bodyy: '',
      url: '',
      categorie:'',
    }

  }


  onchangetitl(e) {
    this.setState({ titl: e.target.value })

  }

  onchangebodyy(e) {
    this.setState({ bodyy: e.target.value })
        
  }

  onchangeurl(e) {
    this.setState({ url: e.target.value })
        
  }

  onchangecategorie(e){

    this.setState({ categorie: e.target.value })
  }





  Submitt(e) {
    e.preventDefault()


    if (!this.state.titl || !this.state.bodyy || !this.state.categorie ) {
      
        alert("Title or Body or categorie of the Blog cannot be blank");
    
    }
    else{
      
    if (localStorage.getItem(1) === null) {
      console.log(" no values in local storage");
      sno = 1;
      window.localStorage.setItem(sno, JSON.stringify(this.state));
      if (!this.state.url) {
        let imgsrc = ('https://wallpaperaccess.com/full/396709.jpg');
       let profile= [JSON.parse(localStorage.getItem(sno))]
       let body;
       let title;
       let categore;
       {profile.map(dataa => {  title=dataa.titl    })}
       {profile.map(dataa => {  body=dataa.bodyy    })}
       {profile.map(dataa => {  categore=dataa.categorie    })}

      console.log(body)
         profile = { 
          'titl': title,
          'bodyy': body ,
          'url': imgsrc ,
            'categorie': categore};
        window.localStorage.setItem(sno, JSON.stringify(profile));
         }
      sno=sno+1;
    }
    else {
      
      
      sno = localStorage.length;
      sno= sno+1;
      window.localStorage.setItem(sno, JSON.stringify(this.state));
      if (!this.state.url) {
        let imgsrc = ('https://wallpaperaccess.com/full/396709.jpg');
       let profile= [JSON.parse(localStorage.getItem(sno))]
       let body;
       let title;
       let categore;
       {profile.map(dataa => {  title=dataa.titl    })}
       {profile.map(dataa => {  body=dataa.bodyy    })}
       {profile.map(dataa => {  categore=dataa.categorie    })}

      console.log(body)
         profile = { 
          'titl': title,
          'bodyy': body ,
          'url': imgsrc,
           'categorie':categore };
        window.localStorage.setItem(sno, JSON.stringify(profile));
         }
    }
  }

    this.setState({
      titl: '',
      bodyy: '',
      url: '',
      categorie:''
    })

    
     
   
  }

  componentDidUpdate() {
    console.log(this.state);
  }




  render() {
    return (


      <>
       
      <form className='sizee' onSubmit={this.Submitt} >
        <div className="mb-3   ">

          <div id="emailHelp" className="form-text"><h1> Title</h1> </div>
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="                                     write your TITLE of the BlOG here   "  value={this.state.titl} onChange={this.onchangetitl}>   </textarea>
          <div id="emailHelp" className="form-text"><h1> write your Blog here</h1></div>
        </div>


        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="17" placeholder="                                         write your BLOG here " value={this.state.bodyy} onChange={this.onchangebodyy}>   </textarea>
        </div>

     
     
        <div className="mb-3">
        <div id="emailHelp" className="form-text"> <h2> Enter Categorie</h2>  </div>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="                                            ex:- movies,business,sports,wildlife,etc " value={this.state.categorie} onChange={this.onchangecategorie}>   </textarea>
        </div>
        


        <div className="mb-3">
          <div className="form-text"> <h1>BACKGROUND IMAGE </h1> </div>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="                                              enter the url for the image " value={this.state.url} onChange={this.onchangeurl}>   </textarea>
        </div>

        <button type="submit" className="btn btn-dark btn-lg">Submit</button>
      </form>

     
      </>


    )
  }

}
