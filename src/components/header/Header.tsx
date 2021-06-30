import { Component } from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header-container">
            <div className="menuToggle">
                <input type="checkbox" className="menu-input"/>
                <span></span>
                <span></span>
                <span></span>
                <ul className="menu">
                <NavLink  to={`/`} className="menu-item active">Main Page</NavLink>
                <NavLink  to={`cards/0`} className="menu-item">Action (set A)</NavLink>
                <NavLink  to={`cards/1`}  className="menu-item">Action (set B)</NavLink>
                <NavLink  to={`cards/2`}  className="menu-item">Animal (set A)</NavLink>
                <NavLink  to={`cards/3`}  className="menu-item">Animal (set B)</NavLink>
                <NavLink  to={`cards/4`}  className="menu-item">Clothets</NavLink>
                <NavLink  to={`cards/5`}  className="menu-item">Emotion</NavLink>
                <NavLink  to={`cards/6`}  className="menu-item">Electronics</NavLink>
                <NavLink  to={`cards/7`}  className="menu-item">Garage</NavLink>
                </ul>
            </div>
            <div className="switch-container">
                <span className="train">Train</span>
                    <label className="switch">
                    <input type="checkbox" className="switch-input"/>
                    <span className="slider round"></span>
                    </label>
                <span className="play">Play</span>
                </div>
            </header>
        )
    }
}

export default Header;