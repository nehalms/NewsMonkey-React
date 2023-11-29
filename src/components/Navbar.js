import React from 'react'
import {Link} from "react-router-dom";

const Navbar = (props)=> {
  
    return (
    <div>
        <nav className="navbar fixed-top navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-Link text-decoration-none text-muted active mx-2" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link mx-2 text-decoration-none text-muted" to="/">About</Link>
                        </li>
                        <li className="nav-item mx-2 "><Link className="nav-Link text-decoration-none text-muted" to="/business">Business</Link> </li>
                        <li className="nav-item mx-2 "><Link className="nav-Link text-decoration-none text-muted" to="/entertainment">Entertainment</Link> </li>
                        <li className="nav-item mx-2 "><Link className="nav-Link text-decoration-none text-muted" to="/general">General</Link> </li>
                        <li className="nav-item mx-2 "><Link className="nav-Link text-decoration-none text-muted" to="/health">Health</Link> </li>
                        <li className="nav-item mx-2 "><Link className="nav-Link text-decoration-none text-muted" to="/science">Science</Link> </li>
                        <li className="nav-item mx-2 "><Link className="nav-Link text-decoration-none text-muted" to="/sports">Sports</Link> </li>
                        <li className="nav-item mx-2 "><Link className="nav-Link text-decoration-none text-muted" to="/technology">Technology</Link> </li>

                        
                    </ul>
                </div>
                <ul className="navbar-nav form-inline my-2 my-lg-0 dropdown">
                    <Link className="btn btn-success mx-5 btn-sm dropdown-toggle" to="/"  role="button" data-bs-toggle="dropdown">Country</Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" onClick={() => {props.set('in')}} to="/in">India</Link></li>
                        <li><Link className="dropdown-item" onClick={() => {props.set('us')}} to="/us">United State</Link></li>
                    </ul>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;