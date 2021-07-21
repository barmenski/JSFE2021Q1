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
            isPlay: true
        }
    }

    render() {
        return (
            <div className="switch-container">
                <span className = {"train" + (this.props.isPlay ? ' non-active' : '')}>Train</span>
                    <label className="switch">
                    <input type="checkbox" onChange = {() => this.props.changeMode(this.state.isPlay)} className="switch-input" checked = {this.props.isPlay}/>
                    <span className="slider round"></span>
                    </label>
                <span className = {"play" + (this.props.isPlay ? '' : ' non-active')}>Play</span>
            </div>
        )
    }
}
export default ChangeButton;