import { Card, Button } from "react-bootstrap"
import Rating from "./Rating"

const SingleProduct = ({ prod }) => {
    return (
        <div className="products">
            <Card>
                <Card.Img variant="top" src={ prod.image } alt={ prod.name } />
                <Card.Body>
                    <Card.Title style={{ marginBottom: 0 }}>{ prod.name }</Card.Title>
                    <div style={{ marginBottom: 15 }}>
                        <Rating rating={prod.ratings} />
                    </div>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>$ { prod.price.split(".")[0] }</span>
                        {prod.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 Days Delivery</div>
                        )}
                    </Card.Subtitle>
                    <Button variant="danger">Remove from cart</Button>
                    <Button disabled={!prod.inStock}>
                        {!prod.inStock ? "Out of Stock" : "Add to cart"}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct