const PIANO=document.getElementById("piano");
const COLLECTION=document.querySelectorAll(".piano-key");



const startCorrespondOver = (event) => {
    if(event.target.classList.contains("piano-key")){
        event.target.classList.add("active");
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
        elem.removeEventListener("mouseover", startSound);
        elem.removeEventListener("mouseout", stopSound);
    });
}

const startSound = (event)=> {
    const audio=document.querySelector(`audio[data-note="${event.target.dataset.note}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    //console.log(event.target.dataset.note);
    event.target.classList.add("active");
}

const stopSound = (event)=> {
    event.target.classList.remove("active");
}

PIANO.addEventListener("mousedown", startCorrespondOver);
PIANO.addEventListener("mouseup", stopCorrespondOver);

window.addEventListener("keydown", (event) => {
    const upKey=event.key.toUpperCase();
    const audio_by_key=document.querySelector(`audio[data-letter="${upKey}"]`);
    
    audio_by_key.currentTime=0;
    audio_by_key.play();
    const piano_key_by_key=document.querySelector(`div[data-letter="${upKey}"]`)
    piano_key_by_key.classList.add("active");
})

window.addEventListener("keyup", (event) => {
    const upKey=event.key.toUpperCase();
    const piano_key_by_key=document.querySelector(`div[data-letter="${upKey}"]`)
    piano_key_by_key.classList.remove("active");
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



