import React from "react";
import { Link } from "react-router-dom";

import "../style/MainPageComponent.css";

const MainPageComponent = ({ comp }) => {
  let { category, image, title, date, paragh, _id } = comp;

  return (
    <div className="component-main">
      <Link to={`/article/${_id}`} style={{ textDecoration: "none" }}>
        <div className="category">
          <button>{category}</button>{" "}
        </div>
        <div className="image-comp">
          <img src={image} />
        </div>
        <div className="title-comp">
          <h5>{title}</h5>
        </div>
        <div className="date">
          <p>{date}</p>
        </div>
        <div className="parag-comp">
          <p>{paragh}</p>
        </div>
      </Link>
    </div>
  );
};

export default MainPageComponent;
