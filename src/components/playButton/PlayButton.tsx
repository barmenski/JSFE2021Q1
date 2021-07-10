import "./PlayButton.css";
import React from 'react'

interface IProps {
    isPlay: boolean,
    startPlay: (value: boolean) => void,
    startPressed: boolean
}

interface IState {
    isPlay: boolean
}



class PlayButton extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isPlay: true
        }
    }

    render() {
        return (
            <div className="play-btn-container">
                <button className={"start-btn"+ (this.props.isPlay && !this.props.startPressed? '' : ' hidden')} onClick = {() => this.props.startPlay(this.state.isPlay)}>Start game</button>
                <button className={"repeat-btn"+ (this.props.startPressed && this.props.isPlay ? '' : ' hidden')}>Repeat</button>
            </div>
        )
    }
}
export default PlayButton;