import { Component } from "react";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
        <footer className="footer-container">
            <a href="https://github.com/barmenski/" className="git-link"> </a>
            <span className="year-span">2021</span>
            <a href="https://rs.school/js/" className="course-link"> </a>
          </footer>
        )
    }
}

export default Footer;