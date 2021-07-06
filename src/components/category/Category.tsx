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

  }

interface IState {
    
  }


/*
  {works.map((work) => (
    <PortfolioItem key={work.id} work={work} />
))
*/
class Category extends React.Component<IProps, IState> {

    render() {
        
        return (
          <>
          <Header />
            <div className="category-container container">

            {category.map((item: ICategory) =>{
                return (
                <NavLink  to={`/cards/${item.url}`} className="category-card">
                <img src={process.env.PUBLIC_URL + item.image} alt={item.text} key="item.image"/>
                {item.text}</NavLink>
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