/*import { Component } from "react";*/
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import './Category.css';
import category from '../categoryBase';
import Header from '../header/Header';
import Footer from '../footer/Footer';


/*interface ICards {
    word: string,
    translation: string,
    image: string,
    audioSrc: string,
}
*/
/*cards: Array<ICategory>|Array<ICards>;*/

interface ICategory {
  text: string,
  image: string,
  url: string,
}

interface IProps {
  isPlay: boolean,
  changeMode: (value: boolean) => void
  }



class Category extends React.Component<IProps> {

    render() {
        
        return (
          <>
          <Header isChecked changeMode={this.props.changeMode}/>
            <div className="category-container container">

            {category.map((item: ICategory) =>{
                return (
                  <NavLink  to={`/cards/${item.url}`}  className = {"category-card " + (this.props.isPlay ? 'play-mode' : '')} key={item.image}>
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