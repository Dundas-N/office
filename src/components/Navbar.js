import React, { Component } from 'react';
import '../App.scss';
import { Link } from "react-router-dom";
import logo from '../logo.png';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-sm">
                <div className='navContainer'>
                    <Link to='/'>
                        <img src={logo} alt="fin logo" className='logo' style={{width:"55px"}} />
                    </Link>    

                    <ul className='navLinks'>
                        <Link to='/offices'>
                            <li>Offices</li>
                        </Link>
                        <Link to='/about'>
                            <li>About</li>
                        </Link>
                        <Link to='/contact'>
                            <li>Contact</li>
                        </Link>
                        <Link to='/default'>
                            <li> <button>Log In</button></li>
                        </Link>
                    </ul>
                    
                </div>
            </nav>
        )
    }
}
