import React from 'react'
import {Link} from "react-router-dom";

const Navbar = (props)=> {
  
    return (
    <div>
        <nav className="navbar fixed-top navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                a className="navbar-brand" href="/">NewsMonkey</Link>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            a className="nav-Link text-decoration-none text-muted active mx-2" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            a className="nav-Link mx-2 text-decoration-none text-muted" href="/">About</Link>
                        </li>
                        <li className="nav-item mx-2 ">a className="nav-Link text-decoration-none text-muted" href="/business">Business</Link> </li>
                        <li className="nav-item mx-2 ">a className="nav-Link text-decoration-none text-muted" href="/entertainment">Entertainment</Link> </li>
                        <li className="nav-item mx-2 ">a className="nav-Link text-decoration-none text-muted" href="/general">General</Link> </li>
                        <li className="nav-item mx-2 ">a className="nav-Link text-decoration-none text-muted" href="/health">Health</Link> </li>
                        <li className="nav-item mx-2 ">a className="nav-Link text-decoration-none text-muted" href="/science">Science</Link> </li>
                        <li className="nav-item mx-2 ">a className="nav-Link text-decoration-none text-muted" href="/sports">Sports</Link> </li>
                        <li className="nav-item mx-2 ">a className="nav-Link text-decoration-none text-muted" href="/technology">Technology</Link> </li>

                        
                    </ul>
                </div>
                <ul className="navbar-nav form-inline my-2 my-lg-0 dropdown">
                    a className="btn btn-success mx-5 btn-sm dropdown-toggle" href="/"  role="button" data-bs-toggle="dropdown">Country</Link>
                    <ul className="dropdown-menu">
                        <li>a className="dropdown-item" onClick={() => {props.set('in')}} href="/in">India</Link></li>
                        <li>a className="dropdown-item" onClick={() => {props.set('us')}} href="/us">United State</Link></li>
                    </ul>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;
