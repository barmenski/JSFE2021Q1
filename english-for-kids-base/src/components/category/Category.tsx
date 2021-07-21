/*import { Component } from "react";*/

/* eslint-disable no-unused-expressions */
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import './Category.css';
//import category from '../categoryBase';
import Header from '../header/Header';
import Footer from '../footer/Footer';
//import {getCategory} from '../categoryBase';


export interface ICategory {
  id: number;
  text: string,
  image: string,
  url: string,
}

interface Category {
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
  repeatBtn: boolean
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
    fetch(`http://localhost:3000/api/category`)
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
          <Header isChecked changeMode={this.props.changeMode} isPlay={this.props.isPlay} startPlay={this.props.startPlay} startPressed={this.props.startPressed} repeat = {this.props.repeat} repeatBtn = {this.props.repeatBtn}/>
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