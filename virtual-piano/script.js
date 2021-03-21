const PIANO=document.getElementById("piano");
const COLLECTION=document.querySelectorAll(".piano-key");

const startCorrespondOver = (event) => {
    if(event.target.classList.contains("piano-key")){
        event.target.classList.add("active");
        event.target.classList.add("piano-key-active-pseudo");
        startSound (event);
    }

    COLLECTION.forEach((elem) => {
        elem.addEventListener("mouseover", startSound);
        elem.addEventListener("mouseout", stopSound);
    });
}

const stopCorrespondOver = () => {
    COLLECTION.forEach((elem) => {
        elem.classList.remove("active");
        elem.classList.remove("piano-key-active-pseudo");
        elem.removeEventListener("mouseover", startSound);
        elem.removeEventListener("mouseout", stopSound);
    });
}

const startSound = (event)=> {
    const audio=document.querySelector(`audio[data-note="${event.target.dataset.note}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    event.target.classList.add("active");
}

const stopSound = (event)=> {
    event.target.classList.remove("active");
}

PIANO.addEventListener("mousedown", startCorrespondOver);
PIANO.addEventListener("mouseup", stopCorrespondOver);

window.addEventListener("keydown", (event) => {
    const audio_by_key=document.querySelector(`audio[data-key="${event.code}"]`);
    if(!audio_by_key) return;   
    audio_by_key.currentTime=0;
    audio_by_key.play();

    const piano_key_by_key=document.querySelector(`div[data-key="${event.code}"]`);
    if(!piano_key_by_key) return;
    piano_key_by_key.classList.add("active");
    piano_key_by_key.classList.add("piano-key-active");
  
})

window.addEventListener("keyup", (event) => {
    const piano_key_by_key=document.querySelector(`div[data-key="${event.code}"]`);
    if(!piano_key_by_key) return;
    piano_key_by_key.classList.remove("active");
    piano_key_by_key.classList.remove("piano-key-active");
    
})

const TOGGLE = document.getElementById("btn-container");
const TOGGLE_COLLECTION = document.querySelectorAll(".btn");
const setActive = (event) => {
    TOGGLE_COLLECTION.forEach((elem)=>{
        elem.classList.remove("btn-active");
    })
    event.target.classList.add("btn-active");
    
};
TOGGLE.addEventListener("mousedown", setActive);

const PIANO_KEY=document.querySelectorAll(".piano-key");
const LETTER=document.getElementById("btn-letters");
const NOTE=document.getElementById("btn-notes");

const setLetter = () => {
    PIANO_KEY.forEach((elem) =>{
        elem.classList.add("piano-key-letter");
    });
}

const setNote = () => {
    PIANO_KEY.forEach((elem) =>{
        elem.classList.remove("piano-key-letter");
    });
}
LETTER.addEventListener("mousedown", setLetter);
NOTE.addEventListener("mousedown", setNote);




  const toggleFullScreen = function () {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }


const FULLSCREEN_BTN=document.getElementById("fullscreen");
FULLSCREEN_BTN.addEventListener("mousedown", toggleFullScreen)


