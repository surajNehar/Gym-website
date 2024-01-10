import React from "react";
import { Link } from "react-router-dom";

function Card({ image, title, descr }) {
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descr}</p>
          <Link className="btn btn-primary">See more</Link>
        </div>
      </div>
    </>
  );
}

export default Card;
