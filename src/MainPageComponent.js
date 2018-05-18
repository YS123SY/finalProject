 import React from "react";
 import './MainPageComponent.css'

const MainPageComponent = ({comp : { category , image ,title,  date, paragh }}) => (
  <div className="component-main">
  <div className="category"><button>{category}</button> </div>
  <div className="image-comp"><img src={image}/></div>
  <div className="title-comp"><h5>{title}</h5></div>
  <div className="date"><p>{date}</p></div>
  <div className="parag-comp"><p>{paragh}</p></div>
  
   
  </div>
);

export default MainPageComponent;