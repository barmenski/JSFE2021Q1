import "./ChangeButton.css";
import React from 'react'

interface IProps {
    isPlay: boolean,
    changeMode: (value: boolean) => void
}

interface IState {
    isPlay: boolean
}



class ChangeButton extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isPlay: false
        }
       /* this.changeMode = this.changeMode.bind(this);*/
    }
   /* changeMode(){
        if(this.state.isPlay === false) {
            this.setState ({
                isPlay: true
            })
        } else  this.setState ({
                    isPlay: false
                 })
                 
    }*/
    render() {
        return (
            <div className="switch-container">
                <span className="train">Train</span>
                    <label className="switch">
                    <input type="checkbox" onChange = {() => this.props.changeMode(this.state.isPlay)} className="switch-input"/>
                    <span className="slider round"></span>
                    </label>
                <span className="play">Play</span>
            </div>
        )
    }
}
export default ChangeButton;