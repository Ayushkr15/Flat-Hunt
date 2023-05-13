import React from "react";
import { Card, Button } from "react-bootstrap";

function FlatCard({ flat }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={flat.imageUrl} />
      <Card.Body>
        <Card.Title>{flat.name}</Card.Title>
        <Card.Text>{flat.description}</Card.Text>
        <Card.Text><b>Price: </b>{flat.price}</Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
}

export default FlatCard;
