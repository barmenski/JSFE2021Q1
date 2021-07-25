import "./AdminPanel.css";
import React from "react";
import { urlDeploy } from '../urlDeploy';

interface ICategory {
    id: number;
    text: string,
    image: string,
    url: string,
  }

interface IProps {
 
}

interface IState {
    error: Error | null,
    category: ICategory[]
}

class AdminPanel extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            error: null,
            category: []
        }
    }

        componentDidMount(){
            fetch(`${urlDeploy}/api/category`)
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  category: result
                });
              },
              (error) => {
                this.setState({
                  error
                });
              }
            )
          }
      

    render() {
        return (
            <>
            <div className="container">
                {this.state.category.map((item: ICategory) =>{
                    return (
                    <div  className = "category-card-admin" key={item.image}>
                        <img src={"./" + item.image} alt={item.text} />
                        <span className="categoryName-admin">{item.text}</span>
                        <div className="button-container">
                            <button className="category-admin-btn update-btn">Update</button>
                            <button className="category-admin-btn addWord-btn">Add word</button>
                        </div>
                    </div>
                    )
                })
                }
            </div>
            </>
        )
}
}

export default AdminPanel;