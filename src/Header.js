import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Active</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Disabled</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Header;