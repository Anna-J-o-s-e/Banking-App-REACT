import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">BANK OF INDIA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Add User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">Search User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/delete">Delete User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/view">View Accounts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default NavBar