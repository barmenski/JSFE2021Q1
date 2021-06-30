import * as React from 'react';
import cards from '../cardsBase';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { RouteComponentProps } from 'react-router-dom';



interface ICards {
    word: string,
    translation: string,
    image: string,
    audioSrc: string,
}

interface IProps {
}

interface IState {
  
}

class Play extends React.Component<any> {
    render() {

      const cat_cards= this.props.match.params.cat_url;
      console.log(cat_cards);
            return (
        <>
        <Header />
          <div className="category-container container">

          {cards[cat_cards].map((item: ICards) =>{
              return (
              <div className="card" key={item.word}>
                <img src={process.env.PUBLIC_URL + "../" + item.image} alt={item.word} />
              {item.word}-{item.translation}</div>
              )
            })
          }
          
        </div>
        <Footer />
      </>
      );
    }
  }
  export default Play;
  