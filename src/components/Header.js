import { CartState } from "../context/Context"
import { Link } from "react-router-dom"

import { Navbar, FormControl, Nav, Dropdown, Badge, Button } from "react-bootstrap"
import { AiFillDelete } from "react-icons/ai"
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
    const {
        state: { cart },
        dispatch,
        productDispatch
    } = CartState()

    return (
        <Navbar 
            bg="dark"
            variant="dark"
            className="navBar d-flex justify-content-between align-items-center"
        >
            
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        placeholder="Search a product"
                        onChange={(e) => {
                            productDispatch({
                                type: "FILTER_BY_SEARCH",
                                payload: e.target.value
                            })
                        }}                      
                    />
                </Navbar.Text>

                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
    
                        <Dropdown.Menu style={{ minWidth: 370, position: 'absolute', right: 0, left: 'initial', marginTop: '10px' }} className="border-0 shadow-lg">

                            {cart.length > 0 ? (
                                <>
                                    {
                                        cart.map((prod) => (
                                            <span className="cartItem" key={prod.id}>
                                                <div className="cartItemDetail">
                                                    <img
                                                        src={prod.image}
                                                        className="cartItemImg"
                                                        alt={prod.name}
                                                    />
                                                    <div>
                                                        <span>{prod.name}</span>
                                                        <small>$ {prod.price.split(".")[0]}</small>
                                                    </div>
                                                </div>
                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod,
                                                    })}
                                                />
                                            </span>
                                        ))
                                    }
                                    <Link to="/cart">
                                        <Button className="cartBtn">
                                            Go to cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <span style={{ padding: 10 }}>Cart is Empty!</span>
                            )}

                            
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
        </Navbar>
    )
}

export default Header