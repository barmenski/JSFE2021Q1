import "./PopUp.css";
import React from "react";

interface IProps {
    popUpActive: boolean
}

interface IState {
    popUpActive: boolean
}

class PopUp extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            popUpActive: false
        }

    }
toAdminPanel = () => {
    window.location.assign(`./admin`);
}
    render() {
        return (
            <>
            <div className = {"popUp-container" + (this.props.popUpActive ? '' : ' hidden')} >
                <div className="input-container">
                    <input type="text" className="popUp-login" placeholder="Login: admin"/>
                    <input type="text" className="popUp-pass" placeholder="Password: admin"/>
                </div>
                <div className="button-container">
                    <button className = "popUp-btn cancel-btn">Cancel</button>
                    <button className = "popUp-btn logIn-btn" onClick = {() => this.toAdminPanel()}>Log In</button>
                </div>
            </div>
            <div className = {"cover"+ (this.props.popUpActive ? '' : ' hidden')}></div>
            </>
        )
}
}

export default PopUp;