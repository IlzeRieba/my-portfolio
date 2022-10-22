import React from "react";
import About from "./About";
import HeroTitle from "./HeroTitle";
import Work from "./Work";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";



export default function Portfolio() {
    return (
      <div>
        <h1>This is a work in progress, come back again!</h1>
       <Header/> 
        <HeroTitle />
        <Work />
        <About /> 
      </div>
    );
     
}