import cards from '../cardsBase';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { RouteComponentProps } from 'react-router-dom';
import './TrainPlay.css';


interface ICard {
    word: string,
    translation: string,
    image: string,
    audioSrc: string,
}

type Props = RouteComponentProps<{ cat_url: string }>

function TrainPlay(props: Props) {
  
      const cat_cards = +props.match.params.cat_url;
      const onClickHandler = (item:ICard) => {
        new Audio("../" + item.audioSrc).play();
       
        console.log(item.word, document.querySelector("[data-word='item.word']"));
       /* const speak_icon = document.querySelector('[data-url=`{ "../" + item.audioSrc}`]');
        speak_icon?.classList.remove("hidden");
        setInterval(()=>speak_icon?.classList.add("hidden"),2000);*/

      };
    
          return (
        <>
        <Header />
          <div className="cards-container container">
            {cards[cat_cards].map((item: ICard) =>{
              return (
                <div className="card" key={item.word} onClick = {() => onClickHandler(item)}>
                  <img src={"../" + item.image} className = "card__img" alt={item.word} data-url = { "../" + item.audioSrc}/>
                  <span className = "card-word" >{item.word}</span>
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
  