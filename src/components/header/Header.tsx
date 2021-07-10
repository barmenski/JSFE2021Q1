import React from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom';
import ChangeButton from "../changeButton/ChangeButton";
import PlayButton from "../playButton/PlayButton";


interface IProps {
    isChecked: boolean,
    changeMode: (value: boolean) => void,
    isPlay: boolean,
    startPlay: (value: boolean) => void,
    startPressed: boolean
}

interface IState {
    isChecked: boolean,

}

class Header extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isChecked: false,
        }
        this.updateViewState = this.updateViewState.bind(this);
    }
    updateViewState(e: MouseEvent) { //закрытие меню при клике: 1) не по меню 2) по ссылке в меню
        const target = e.target as HTMLElement;
        if(target.classList.contains('menu-input')){
            if(this.state.isChecked === false){
                this.setState({
                    isChecked: true
                });
            } else  this.setState({
                        isChecked: false
                    });

        } else this.setState({
                     isChecked: false
                });
    }

    componentDidMount() {
        window.addEventListener("mousedown", this.updateViewState);
      }

    componentWillUnmount() {
        window.removeEventListener("mousedown", this.updateViewState);
      }


    render() {
        return (
            <>
            <header className="header-container">
                <div className = "menuToggle">
                    <input type="checkbox" className="menu-input" defaultChecked checked={this.state.isChecked}/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className={"menu" + (this.props.isPlay ? ' play-mode' : '')}>
                    <NavLink  to={`/`} className="menu-item">Main Page</NavLink>
                    <NavLink  to={`/cards/0`} className="menu-item">Action (set A)</NavLink>
                    <NavLink  to={`/cards/1`}  className="menu-item">Action (set B)</NavLink>
                    <NavLink  to={`/cards/2`}  className="menu-item">Animal (set A)</NavLink>
                    <NavLink  to={`/cards/3`}  className="menu-item">Animal (set B)</NavLink>
                    <NavLink  to={`/cards/4`}  className="menu-item">Clothets</NavLink>
                    <NavLink  to={`/cards/5`}  className="menu-item">Emotion</NavLink>
                    <NavLink  to={`/cards/6`}  className="menu-item">Electronics</NavLink>
                    <NavLink  to={`/cards/7`}  className="menu-item">Garage</NavLink>
                    </ul>
                </div>
        <ChangeButton isPlay= {this.props.isPlay} changeMode ={this.props.changeMode}/>
        

        </header>
        <PlayButton isPlay= {this.props.isPlay} startPlay ={this.props.startPlay} startPressed = {this.props.startPressed}/>
        </>
        )
    }
}

export default Header;

