// import boostrap,react-boostrap and card component from react-boostrap

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";

// This is a single react-boostrap component thats been rendered thrice on the app.js file

function MyCard() {
  return (
    <Card style={{ width: "18rem" }} className="Card--div">
      <Card.Img variant="top" src={require("../images/Card1.jpg")} />
      <Card.Body>
        <Card.Title>Jaytechent </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="btn" variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
