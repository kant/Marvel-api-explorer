import React, { Component } from "react";
import marvel from "../uploads/homeData"
import DisplayHomeData from "./DisplayHomeData"

 class HomeComponent extends Component {
  render() {
    console.log(marvel.marvelCharecters);
    return (
      
      <>
      <section id="header" className=" d-flex align-items-center">
          <div className="container-fluid nav_bg ">
            <div className="row">
              <div className="col-10 mx-auto">
               <div >
               <h1>Marvel Charecters</h1>
          <DisplayHomeData allData={marvel.marvelCharecters} reqParams="charecters" />
              
               </div>
               <hr/>
               <div >
               <h1>Marvel Comics</h1>
                   <DisplayHomeData allData={marvel.marvelComics} reqParams="comics" />
              <hr/>
               </div>
                   
                 
           
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HomeComponent
