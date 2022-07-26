import React, { useState, useContext } from 'react'
import Menu from "../component/avg/ss.svg";
import Close from "../component/avg/cc.svg";
import My from "../component/avg/3.jpg"
import { Link } from "react-router-dom"
import Mycart from '../component/avg/cart.svg';
import { DataContext } from "./DataProvider"
function Header() {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
    return (
        <header>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="mm" width="30px" />
            </div>
            <div className='logo'>
                <h1><Link to="/products">CITIZEN</Link></h1>
            </div>
            <ul style={styleMenu}>
                <li><Link to="/header">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Login / Register</Link></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="ss" width="30px" className="menu" />
                </li>
            </ul>
            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={Mycart} alt="" width="25" />
                </Link>
            </div>
        </header>

    )
}
export default Header