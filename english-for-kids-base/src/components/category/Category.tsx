/*import { Component } from "react";*/

/* eslint-disable no-unused-expressions */
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import './Category.css';
import category from '../categoryBase';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {getCategory} from '../categoryBase';


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

class Category extends React.Component<IProps> {
  componentDidMount(){
    getCategory();
  }

    render() {
        
        return (
          <>
          <Header isChecked changeMode={this.props.changeMode} isPlay={this.props.isPlay} startPlay={this.props.startPlay} startPressed={this.props.startPressed} repeat = {this.props.repeat} repeatBtn = {this.props.repeatBtn}/>
            <div className="category-container container">
            {category.map((item: ICategory) =>{
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