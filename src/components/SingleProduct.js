import { Card, Button } from "react-bootstrap"
import { CartState } from "../context/Context"
import Rating from "./Rating"

const SingleProduct = ({ prod }) => {
    const {
        state: { cart },
        dispatch,
    } = CartState()

    return (
        <div className="products">
            <Card className="border-0 shadow-sm">
                <Card.Img variant="top" src={ prod.image } alt={ prod.name } />
                <Card.Body>
                    <Card.Title style={{ marginBottom: 0 }}>{ prod.name }</Card.Title>
                    <div style={{ marginBottom: 15 }}>
                        <Rating rating={prod.ratings} />
                    </div>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>$ { prod.price.split(".")[0] }</span>
                        {prod.fastDelivery ? (
                            <div><small className="text-muted">Fast Delivery</small></div>
                        ) : (
                            <div><small className="text-muted">4 Days Delivery</small></div>
                        )}
                    </Card.Subtitle>
                    {
                        cart.some(p => p.id === prod.id) ? (
                            <Button
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: prod,
                                    })
                                }}
                                variant="danger"
                            >
                                Remove from cart
                            </Button>
                        ) : (
                            <Button
                                onClick={() => {
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: prod,
                                    })
                                }}
                                disabled={!prod.inStock}
                            >
                                {!prod.inStock ? "Out of Stock" : "Add to cart"}
                            </Button>
                        )
                    }
                    
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct