import React from "react";
import About from "./About";
import HeroTitle from "./HeroTitle";
import Work from "./Work";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import "./Portfolio.css";



export default function Portfolio() {
    return (
      <div className="Portfolio">
       <Header/> 
        <HeroTitle />
        <Work />
        <About /> 
      </div>
    );
     
}