import { Container, Navbar, FormControl, Nav, Dropdown, Badge } from "react-bootstrap"

import { FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom"

const Header = () => {
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
                    />
                </Navbar.Text>

                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge>{10}</Badge>
                        </Dropdown.Toggle>
    
                        <Dropdown.Menu style={{ minWidth: 370, position: 'absolute', right: 0, left: 'initial', marginTop: '10px' }} className="border-0 shadow-lg">
                            <span style={{ padding: 10 }}>Cart is Empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
        </Navbar>
    )
}

export default Header