import React from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom';
import ChangeButton from "../changeButton/ChangeButton";


interface IProps {
    isChecked: boolean,
    changeMode: (value: boolean) => void
}

interface IState {
    isChecked: boolean,
    isPlay: boolean
}

class Header extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isChecked: false,
            isPlay: false
        }
        this.updateViewState = this.updateViewState.bind(this);
        this.changeMode = this.changeMode.bind(this);
    }
    updateViewState(e: MouseEvent) {
       /* const target = e.target as HTMLElement;
        if(!target.classList.contains('0.menuToggle')) {
            const sideMenu = document.querySelector('.menuToggle') as HTMLInputElement;
            if(sideMenu) sideMenu.checked = false;
            console.log(sideMenu);
        }*/

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
    changeMode(){
        if(this.state.isPlay === false) {
            this.setState ({
                isPlay: true
            })
        } else  {
                    this.setState ({
                    isPlay: false
                 })
                 }
    }
    componentDidMount() {
        window.addEventListener("mousedown", this.updateViewState);
      }

    componentWillUnmount() {
        window.removeEventListener("mousedown", this.updateViewState);
      }


    render() {
        return (
            <header className="header-container">
                <div className = {"menuToggle " + (this.state.isPlay ? 'play-mode' : '')}>
                    <input type="checkbox" className="menu-input" defaultChecked checked={this.state.isChecked}/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="menu">
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
                {/*}
                <div className="switch-container">
                <span className="train">Train</span>
                    <label className="switch">
                    <input type="checkbox" onChange = {() => this.changeMode()} className="switch-input"/>
                    <span className="slider round"></span>
                    </label>
                <span className="play">Play</span>
            </div>
        */}
        <ChangeButton isPlay changeMode ={this.props.changeMode}/>
            </header>
        )
    }
}

export default Header;

