import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./card.module.css"

function Cards({ title, img, price, category}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Card.Text>{category}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    </div>
  );
}

export default Cards;
