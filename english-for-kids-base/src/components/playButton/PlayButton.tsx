import "./PlayButton.css";
import React from 'react'

interface IProps {
    isPlay: boolean,
    startPlay: (value: boolean) => void,
    startPressed: boolean,
    repeat: (value: boolean) => void,
    repeatBtn: boolean
}

interface IState {
    isPlay: boolean,
    startPressed: boolean,
    repeatBtn: boolean
}



class PlayButton extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isPlay: true,
            startPressed: true,
            repeatBtn: true
        }
    }

    render() {
        return (
            <div className="play-btn-container">
                <button className={"start-btn"+ (this.props.isPlay && !this.props.startPressed? '' : ' hidden')} onClick = {() => this.props.startPlay(this.state.startPressed)}>Start game</button>
                <button className={"repeat-btn"+ (this.props.startPressed && this.props.isPlay ? '' : ' hidden')} onClick ={() => this.props.repeat(this.state.repeatBtn)}>Repeat</button>
            </div>
        )
    }
}
export default PlayButton;