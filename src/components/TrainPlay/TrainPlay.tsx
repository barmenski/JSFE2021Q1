import cards from '../cardsBase';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { RouteComponentProps } from 'react-router-dom';
import './TrainPlay.css';
import {IParams} from '../../App'


interface ICard {
    word: string,
    translation: string,
    image: string,
    audioSrc: string,
}


interface Props extends RouteComponentProps<IParams> {
  changeMode: (value: boolean) => void; isPlay: boolean; 
}

function TrainPlay(props: Props) {
  
      const cat_cards = +props.match.params.cat_url;
      const onClickHandler = (item:ICard) => {
        new Audio("../" + item.audioSrc).play();
      };
   
          return (
        <>
        <Header isChecked changeMode={props.changeMode}/>
          <div className="cards-container container">
            {cards[cat_cards].map((item: ICard) =>{
              return (
                <div className={"card " + (props.isPlay ? 'play-mode' : '')} key={item.word} onClick = {() => onClickHandler(item)}>
                  <img src={"../" + item.image} className = "card__img" alt={item.word} data-url = { "../" + item.audioSrc}/>
                  <span className = {"card-word " + (props.isPlay ? 'play-mode' : '')}>{item.word}</span>
                  <span className = "card-translation hidden">{item.translation}</span>
                  <img src="../img/speaker-icon.svg" alt="speaker-icon" className="speaker-icon hidden" data-word={item.word}/>
                </div>
              )
            })
          }
          
        </div>
        
        <Footer />
      </>
      );
    }

  export default TrainPlay;
  