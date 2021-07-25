import Header from '../header/Header';
import Footer from '../footer/Footer';
import React from "react";
import { RouteComponentProps } from 'react-router-dom';
import './TrainPlay.css';
import {IParams} from '../../App';
import { urlDeploy } from '../urlDeploy';

export interface ICard {
    word: string,
    translation: string,
    image: string,
    audioSrc: string,
    url: string
}
/*
interface TrainPlay {
  word: string,
  translation: string,
  image: string,
  audioSrc: string,
  url: string
}
*/
interface IProps extends RouteComponentProps<IParams> {
  changeMode: (value: boolean) => void,
  isPlay: boolean,
  startPlay: (value: boolean) => void,
  startPressed: boolean,
  repeat: (value: boolean) => void,
  repeatPressed: boolean,
  popUpActive: boolean,
  toPopUp: (value: boolean) => void,
}

interface IState {
  isPlay: boolean;
  startPressed: boolean;
  repeatPressed: boolean,
  errorAmount: number,
  cards: ICard[],
  error: Error | null,
  cardsArray: ICard[];
  audioSrcArray: string[]
}

class TrainPlay extends React.Component<IProps, IState> {
  constructor(props:IProps) {
    super(props);
    this.state = {
        isPlay: true,
        startPressed: false,
        repeatPressed: false,
        errorAmount: 0,
        error: null,
        cards: [],
        cardsArray: [],
        audioSrcArray: []
    }  
   
  }
  
componentDidMount() {

  fetch(`${urlDeploy}/api/cards`)
  .then(res => res.json())
  .then(
    (result) => {
      const categoryName: string = this.props.match.params.cat_url;
      const cardsFiltered = result.filter((item: { url: string; }) => item.url === categoryName);

      this.setState({
        cards: cardsFiltered
      });
      
    },
    (error) => {
      this.setState({
        error
      });
    }
  );

  //this.audioSrcArrayMake();
 // this.randomRead();
  //this.repeat();
  
}

componentDidUpdate() {
  this.audioSrcArrayMake();
  
}

      //пераметр из адресной строки (текст типа "0", "3"), номер категории
      
      audioSrcArray: Array<string> = [];

      audioSrcArrayMake = () => {
        const arrLength: number = this.state.cards.length;
        for (let i=0; i <arrLength; i++) {
          this.audioSrcArray.push(this.state.cards[i].audioSrc);
      }
      this.audioSrcArray.sort(() => Math.random() - 0.5);

      console.log(`this.audioSrcArray complite = `, this.audioSrcArray);
    }


      randomRead = () => {
        if(this.props.startPressed){
          new Audio("../" + this.audioSrcArray[0]).play(); 
          console.log(`this.audioSrcArray randomRead = `, this.audioSrcArray);
          //читаем по audioSrc из массива audioSrcArray<audioSrc>
         // console.log("randomRead", this.cardArray[0]);
        }
      }

      repeat = () => {
        if(this.props.repeatPressed){
          new Audio("../" + this.state.audioSrcArray[0]).play(); //читаем по audioSrc из массива audioSrcArrayy<audioSrc>
         // console.log("repeat", this.cardArray[0]);
        }
      }

      mouseLeave = (item: ICard) =>{ //убираем перевод псле того как мышка покидает карточку
        const currentTranslationSpan = document.querySelector(`[data-translation="${item.translation}"]`);
        const currentWordSpan = document.querySelector(`[data-word="${item.word}"]`);
        if(currentTranslationSpan && currentWordSpan) {
          if(!currentTranslationSpan.classList.contains('hidden')) {
            currentTranslationSpan.classList.add('hidden');
            currentWordSpan.classList.remove('hidden');
          } else return;
        }
      }

      onClickHandlerTrain = (item: ICard) => { //режим тренировки: при клике по карточке проигрываем mp3, отображаем громкоговоритель на 1с, показываем перевод
          new Audio("../" + item.audioSrc).play();
          const currentSpeakerImg = document.querySelector(`[data-spk-img="${item.word}"]`);
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
    

    onClickHandlerPlay = (item: ICard) => { //item - объект из cardArray
      const starContainer = document.querySelector(".play-btn-container");
      const clickedCard = document.querySelector(`[data-url="../${item.audioSrc}"]`);
        if(this.state.audioSrcArray[0] === item.audioSrc) {
          if(!clickedCard?.classList.contains("non-active")){
            new Audio("../audio/correct.mp3").play();
            if(clickedCard) clickedCard.classList.add("non-active");
            let star = document.createElement('div');
            star.className = "star-win";
            if(starContainer) starContainer.prepend(star);
            this.state.audioSrcArray.splice(0,1);
            if(this.state.audioSrcArray.length === 0){
              if(this.state.errorAmount === 0){
                new Audio("../audio/success.mp3").play();
                const cardContainer = document.querySelector('.cards-container');
                if(cardContainer) cardContainer.classList.add('hidden');
                const resultSuccess = document.querySelector('.success__img');
                if(resultSuccess) resultSuccess.classList.remove('hidden');
              } else {
                new Audio("../audio/failure.mp3").play();
                const cardContainer = document.querySelector('.cards-container');
                if(cardContainer) cardContainer.classList.add('hidden');
                const resultFailure = document.querySelector('.failure__img');
                if(resultFailure) resultFailure.classList.remove('hidden');
              }
            }
            //console.log(this.cardArray, clickedCard);
            setTimeout(this.randomRead, 500);
          }
        } else if (!clickedCard?.classList.contains("non-active")){
            let starLose = document.createElement('div');
            starLose.className = "star-lose";
            if(starContainer) starContainer.prepend(starLose);
            new Audio("../audio/error.mp3").play();
            this.setState({errorAmount: this.state.errorAmount+1});
            //console.log("Loh!");
          }
        
    } 
      render() {

       return (
        <>
         <Header isChecked changeMode={this.props.changeMode} isPlay={this.props.isPlay} startPlay={this.props.startPlay} startPressed={this.props.startPressed} repeat = {this.props.repeat} repeatPressed = {this.props.repeatPressed} toPopUp = {this.props.toPopUp} popUpActive = {this.props.popUpActive}/>
          <div className="cards-container container">
            {this.state.cards.map((item: ICard) =>{
              return (
                <div className="card" key={item.word} onClick = {this.props.isPlay ?() => this.onClickHandlerPlay(item):() => this.onClickHandlerTrain(item)} onMouseLeave = {()=>this.mouseLeave(item)}>
                  <img src={"../" + item.image} className = "card__img" alt={item.word} data-url = { "../" + item.audioSrc}/>
                  <span className = {"card-word" + (this.props.isPlay ? ' hidden' : '')} data-word={item.word}>{item.word}</span>
                  <span className = "card-translation hidden" data-translation={item.translation}>{item.translation}</span>
                  <span className = {"card-empty" + (this.props.isPlay ? ' play-mode' : ' hidden')}> </span>
                  <img src="../img/speaker-icon.svg" alt="speaker" className="speaker-icon hidden" data-spk-img={item.word}/>
                </div>
              )
            })
          }
          
        </div> 
        <div className="result-container">
          <img src="../img/success.jpg" className = "success__img hidden" alt="Success"/>
          <img src="../img/failure.jpg" className = "failure__img hidden" alt="Failure"/>
        </div>
        <Footer />
      </>
      );
    }
  }
  export default TrainPlay;
  