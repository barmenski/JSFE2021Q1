/*import { Component } from "react";*/
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import './Category.css';
import category from '../categoryBase';
import Header from '../header/Header';
import Footer from '../footer/Footer';


interface ICategory {
  text: string,
  image: string,
  url: string,
}

interface IProps {
  isPlay: boolean,
  changeMode: (value: boolean) => void,
  startPlay: (value: boolean) => void,
  startPressed: boolean
  }



class Category extends React.Component<IProps> {

    render() {
        
        return (
          <>
          <Header isChecked changeMode={this.props.changeMode} isPlay={this.props.isPlay} startPlay={this.props.startPlay} startPressed={this.props.startPressed}/>
            <div className="category-container container">
            {/*<button onClick = {() => {console.log(this.props.isPlay)}}>Console</button>*/}
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