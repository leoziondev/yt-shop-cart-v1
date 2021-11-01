import { useEffect, useState } from "react"
import { CartState } from "../context/Context"

import Rating from './Rating'
import { ListGroup, Button, Row, Col, Form, Image, Container } from "react-bootstrap"
import { AiFillDelete } from "react-icons/ai"

const Cart = () => {
    const {
        state: { cart },
        dispatch
    } = CartState()    

    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
    }, [cart])

    return (
        <div className="carPage home">
            <div className="cartPage__list">
                <ListGroup style={{ marginTop: 20 }}>
                    {
                        cart.map((prod) => (
                            <ListGroup.Item key={prod.id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={prod.image} alt={prod.name} fluid rounded />
                                    </Col>
                                    <Col md={2}>
                                        <span>{prod.name}</span>
                                    </Col>
                                    <Col md={2}>
                                        <Rating rating={prod.ratings} />
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            value={prod.qty}
                                            onChange={(e) => 
                                                dispatch({
                                                    type: "CHANGE_CART_QTY",
                                                    payload: {
                                                        id: prod.id,
                                                        qty: e.target.value
                                                    }
                                                })
                                            }
                                        >
                                            {[...Array(prod.inStock).keys()].map((x) => (
                                                <option key={x + 1}>{x + 1}</option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() => 
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: prod,
                                                })
                                            }
                                        >
                                            <AiFillDelete
                                                fontSize="20px"
                                                style={{ cursor: 'pointer' }}
                                                
                                            />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
            <div className="summary shadow-sm">
                <span className="title">Subtotal ({cart.length}) items</span>
                <span
                    className="title"
                    style={{ fontSize: 20, fontWeight: 800 }}
                >
                    Total: $ {total}
                </span>
                <Button type="button" disabled={cart.length === 0}>
                    Proceed to checkout
                </Button>
            </div>
        </div>
    )
}

export default Cart