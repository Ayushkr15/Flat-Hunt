import React from "react";

function FlatCard({ flat }) {
  return (
    <div className="card">
      <img src={flat.imageUrl} alt={flat.name} />
      <h3>{flat.name}</h3>
      <p>{flat.description}</p>
      <p>Facilities: {flat.facilities}</p>
      <button>Contact Owner</button>
    </div>
  );
}

export default FlatCard;
