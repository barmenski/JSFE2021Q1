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
  changeMode: (value: boolean) => void; 
  isPlay: boolean; 
  startPlay: (value: boolean) => void;
  startPressed: boolean;
}

function TrainPlay(props: Props) {
  
      const cat_cards = +props.match.params.cat_url;

      const mouseLeave = (item: ICard) =>{
        const currentTranslationSpan = document.querySelector(`[data-translation="${item.translation}"]`);
        const currentWordSpan = document.querySelector(`[data-word="${item.word}"]`);
        if(currentTranslationSpan&&currentWordSpan) {
          if(!currentTranslationSpan.classList.contains('hidden')) {
            currentTranslationSpan.classList.add('hidden');
            currentWordSpan.classList.remove('hidden');
          } else return;
        }
      }

      const onClickHandlerTrain = (item: ICard) => {
          new Audio("../" + item.audioSrc).play();
          const currentSpeakerImg = document.querySelector(`[data-word-img="${item.word}"]`);
          if(currentSpeakerImg) {currentSpeakerImg.classList.remove("hidden");
          setTimeout(()=>{currentSpeakerImg.classList.add("hidden")}, 1000);

          const currentTranslationSpan = document.querySelector(`[data-translation="${item.translation}"]`);
          if(currentTranslationSpan) {currentTranslationSpan.classList.remove('hidden')};

          const currentWordSpan = document.querySelector(`[data-word="${item.word}"]`);
          if(currentWordSpan) {
            if(!currentWordSpan.classList.contains('hidden')) {
                currentWordSpan.classList.add('hidden');
            } else return;
        }
      };
    }
    
      const onClickHandlerPlay = (item: ICard) => {

      }

   
          return (
        <>
        <Header isChecked changeMode={props.changeMode} isPlay={props.isPlay} startPlay={props.startPlay} startPressed={props.startPressed}/>
          <div className="cards-container container">
            {cards[cat_cards].map((item: ICard) =>{
              return (
                <div className="card" key={item.word} onClick = {props.isPlay ?() => onClickHandlerPlay(item):() => onClickHandlerTrain(item)} onMouseLeave = {()=>mouseLeave(item)}>
                  <img src={"../" + item.image} className = "card__img" alt={item.word} data-url = { "../" + item.audioSrc}/>
                  <span className = {"card-word" + (props.isPlay ? ' hidden' : '')} data-word={item.word}>{item.word}</span>
                  <span className = "card-translation hidden" data-translation={item.translation}>{item.translation}</span>
                  <span className = {"card-empty" + (props.isPlay ? ' play-mode' : ' hidden')}> </span>
                  <img src="../img/speaker-icon.svg" alt="speaker-icon" className="speaker-icon hidden" data-word-img={item.word}/>
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
  