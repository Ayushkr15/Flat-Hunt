import React from "react";

const Flat = ({ flat }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={flat.imageUrl} alt={flat.name} />
      <div className="card-body">
        <h5 className="card-title">{flat.name}</h5>
        <p className="card-text">{flat.description}</p>
        <p className="card-text">
          <small className="text-muted">{flat.facilities}</small>
        </p>
      </div>
    </div>
  );
};

export default Flat;
