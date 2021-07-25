import { NavLink } from 'react-router-dom';
import * as React from 'react';
import './Category.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { urlDeploy } from '../urlDeploy';


export interface ICategory {
  id: number;
  text: string,
  image: string,
  url: string,
}

interface IProps {
  isPlay: boolean,
  changeMode: (value: boolean) => void,
  startPlay: (value: boolean) => void,
  startPressed: boolean,
  repeat: (value: boolean) => void,
  repeatPressed: boolean,
  popUpActive: boolean,
  toPopUp: (value: boolean) => void,
  cancelPopUp: (value: boolean) => void,
  }

  interface IState {
    error: Error | null,
    category: ICategory[]
  }

class Category extends React.Component<IProps, IState> {
  constructor(props:IProps) {
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
          <Header isChecked changeMode={this.props.changeMode} isPlay={this.props.isPlay} startPlay={this.props.startPlay} startPressed={this.props.startPressed} 
          repeat = {this.props.repeat} repeatPressed = {this.props.repeatPressed} toPopUp = {this.props.toPopUp} popUpActive = {this.props.popUpActive} 
          cancelPopUp = {this.props.cancelPopUp}/>
            <div className="category-container container">
            
            {this.state.category.map((item: ICategory) =>{
                return (
                  <NavLink  to={`/cards/${item.url}`}  className = {"category-card" + (this.props.isPlay ? ' play-mode' : '')} key={item.image}>
                    <img src={"./" + item.image} alt={item.text} />{item.text}
                  </NavLink>
                )
              })
            }
            
          </div>
          <Footer />
        </>
        )
    }
}
export default Category;