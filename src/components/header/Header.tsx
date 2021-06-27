import { Component } from "react";
import "./Header.css"

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
                <a href="#/" className="menu-item active">Main Page</a>
                <a href="#/cards" className="menu-item">Action (set A)</a>
                <a href="#/cards" className="menu-item">Action (set B)</a>
                <a href="#/cards" className="menu-item">Action (set C)</a>
                <a href="#/cards" className="menu-item">Adjective</a>
                <a href="#/cards" className="menu-item">Animal (set A)</a>
                <a href="#/cards" className="menu-item">Animal (set B)</a>
                <a href="#/cards" className="menu-item">Clothets</a>
                <a href="#/cards" className="menu-item">Emotion</a>
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