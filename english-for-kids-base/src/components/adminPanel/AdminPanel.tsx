import "./AdminPanel.css";
import React from "react";

interface IProps {
 
}

interface IState {

}

class AdminPanel extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
        
        }

    }

    render() {
        return (
            <>
                <div className="container">Admin Panel</div>
            </>
        )
}
}

export default AdminPanel;