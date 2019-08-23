import React from "react";

const style={
    navText: {
        fontSize: "22px",
        fontFamily: "Fugaz One, cursive",
    }
}

const Nav = props => (
    <nav >
        <div className="nav-wrapper">
            <a href="/home" className="brand-logo">
                { <img id="image" src={"https://cdn0.iconfinder.com/data/icons/gray-business-toolbar/512/repair_service-512.png"}/> }
            </a>
            
            <div className="text">
                {props.text}
            </div>
            <ul id="nav-mobile" className="right hide-on-med-and-down ">

                <li ><a className="indigo-text" style={style.navText} href="/view">All Listings</a></li> 
                <li><a className="indigo-text" style={style.navText} href="/search">Find Work</a></li>
                <li><a className="indigo-text" style={style.navText} href="/jobs">Post Work</a></li> 
                <li><a className="indigo-text" style={style.navText} href="/hire">Jobs</a></li> 
            </ul>
        </div>
    </nav>
);

export default Nav;