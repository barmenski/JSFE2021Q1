/*:root {
    --blur: 0px;
    --invert: 0%;
    --sepia: 0%;
    --saturate: 100%;
    --hue: 0deg;
  }
*/

var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

var blur = rootStyles.getPropertyValue('--blur');
var invert = rootStyles.getPropertyValue('--invert');
var sepia = rootStyles.getPropertyValue('--sepia');
var saturate = rootStyles.getPropertyValue('--saturate');
var hue = rootStyles.getPropertyValue('--hue');
//console.log(blur, invert, sepia, saturate, hue);





const MAIN=document.querySelector(".main");
const OUTPUT=document.querySelectorAll("output");
const COLLECTION=document.querySelectorAll("input");
const EDITOR=document.querySelector(".editor");
const BUTTON=document.querySelectorAll(".btn");


const startCorrespondOver = (event) => {

    var output=document.querySelector(`input[name="${event.target.name}"]+output`);
        //let nameEvent=event.target.name;
    //if(event.target.matches('input[name="blur"]')){
        //event.target.classList.add("active");
        //console.log(event.target.name);
        //const output=document.querySelector(`input[name="blur"]+output`);
        // document.documentElement.style.setProperty(`--${event.target.name}`, output.value + suffix);
        output.value=event.target.value;
        const suffix=event.target.dataset.sizing || "";
        root.style.setProperty(`--${event.target.name}`, output.value + suffix);
        //console.log(blur, invert, sepia, saturate, hue);    
}

const stopCorrespondOver = () => {
    COLLECTION.forEach((elem) => {
        elem.classList.remove("active");

    });
}

const startEditor = (event) => {
    BUTTON.forEach((elem) => {
        elem.classList.remove("btn-active");

    });
    event.target.classList.add("btn-active");
    if(event.target.classList.contains("btn-reset")){
        root.style.setProperty(`--blur`, "0px");
        root.style.setProperty(`--invert`, "0%");
        root.style.setProperty(`--sepia`, "0%");
        root.style.setProperty(`--saturate`, "100%");
        root.style.setProperty(`--hue`, "0deg");
        COLLECTION.forEach((elem) => {
            var someOutput=document.querySelector(`input[name="${elem.name}"]+output`);

            if(elem.matches(`input[name="saturate"]`)){
                elem.value="100";
                someOutput.value="100";
            } else {
                elem.value="0";
                someOutput.value="0";
            }
        });



    };
}

MAIN.addEventListener("input", startCorrespondOver);
MAIN.addEventListener("mouseup", stopCorrespondOver);
EDITOR.addEventListener("click", startEditor);

var base="";
const baseNight = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/';
const baseMorning = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/';
const baseDay = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/';
const baseEvening = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/';

let now = new Date();
let hours=now.getHours();
console.log(hours);
if ((hours>6)&&(hours<12)) {
    base=baseMorning;
} else if ((hours>=12)&&(hours<18)) {
        base=baseDay;
    } else if ((hours>=18)&&(hours<00)) {
        base=baseEvening;
        } else {
            base=baseNight;
        }

const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
const body = document.querySelector('img');
const btn = document.querySelector('.btn-next');

function viewBgImage(src) {  
  const img = new Image();
  img.src = src;
  img.onload = () => {      
  body.setAttribute("src", `${src}`);
  }; 
}

function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
} 
btn.addEventListener('click', getImage);
/*console.log(MAIN);

console.log(COLLECTION);*/