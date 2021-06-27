/*import { Component } from "react";*/
import * as React from 'react';
import './Main.css';
import category from '../category';


/*
interface ICategory {
    text: string;
    image: string;
}
*/
/*interface ICards {
    word: string,
    translation: string,
    image: string,
    audioSrc: string,
}
*/
/*cards: Array<ICategory>|Array<ICards>;*/

interface IProps {

  }

interface IState {
    
  }


/*
  {works.map((work) => (
    <PortfolioItem key={work.id} work={work} />
))
*/
class Main extends React.Component<IProps, IState> {

    render() {
        
        return (
            <div className="category-container container">

            {category.map((item) =>{
                return (
                <a href="#/cards" className="category-card">
                <img src={process.env.PUBLIC_URL + item.image} alt={item.text}/>
                {item.text}</a>
                )
              })
            }
            
          </div>
        
        )
    }
}
export default Main;