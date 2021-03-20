const COLLECTION=document.querySelectorAll(".piano-key");
const PIANO=document.getElementById("piano");
/*
COLLECTION.forEach((elem)=>{
    elem.addEventListener("mousedown", (event)=> {
        event.target.classList.add("active");
    })
    elem.addEventListener("mouseup", (event)=> {
        event.target.classList.remove("active");
    })
})
*/
const startSound = (event)=> {
    event.target.classList.add("active");
}

const stopSound = (event)=> {
    event.target.classList.remove("active");
}

/*если произошел mosedown, то заппускается событие startCorrespondOver */
/*const startCorrespondOver = () => {
    COLLECTION.forEach((elem) => {
        elem.addEventListener("mouseover", (event)=>{event.target.classList.add("active");})
        elem.addEventListener("mouseout", (event)=>{event.target.classList.remove("active");})
    });
}

const stopCorrespondOver = () => {
    COLLECTION.forEach((elem) => {
        elem.removeEventListener("mouseover", (event)=>{event.target.classList.add("active");})
        elem.removeEventListener("mouseout", (event)=>{event.target.classList.remove("active");})
    });
}
*/
const startCorrespondOver = (event) => {
    event.target.classList.add("active");
    COLLECTION.forEach((elem) => {
        elem.addEventListener("mouseover", startSound);
        elem.addEventListener("mouseout", stopSound)
    });
}

const stopCorrespondOver = () => {
    COLLECTION.forEach((elem) => {
        elem.classList.remove("active");
        elem.removeEventListener("mouseover", startSound)
        elem.removeEventListener("mouseout", startSound)
    });
}

PIANO.addEventListener("mousedown", startCorrespondOver);
PIANO.addEventListener("mouseup", stopCorrespondOver);


    /*
PIANO.addEventListener("mousedown", (event)=> {
    event.target.classList.add("active");
})

PIANO.addEventListener("mouseup", (event)=> {
    event.target.classList.remove("active");
})
*/