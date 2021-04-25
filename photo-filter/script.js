/*:root {
    --blur: 0px;
    --invert: 0%;
    --sepia: 0%;
    --saturate: 100%;
    --hue: 0deg;
  }
*/

/*----------------------------------For input-range start--------------------------------*/

var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

var blur = rootStyles.getPropertyValue('--blur');
var invert = rootStyles.getPropertyValue('--invert');
var sepia = rootStyles.getPropertyValue('--sepia');
var saturate = rootStyles.getPropertyValue('--saturate');
var hue = rootStyles.getPropertyValue('--hue');

const MAIN=document.querySelector(".filters");
const OUTPUT=document.querySelectorAll("output");
const COLLECTION=document.querySelectorAll("input");
const EDITOR=document.querySelector(".editor");
const BUTTON=document.querySelectorAll(".btn");


const startCorrespondOver = (event) => {
    var output=document.querySelector(`input[name="${event.target.name}"]+output`);
    output.value=event.target.value;
    const suffix=event.target.dataset.sizing || "";
    root.style.setProperty(`--${event.target.name}`, output.value + suffix);
}


const stopCorrespondOver = () => {
    COLLECTION.forEach((elem) => {
        elem.classList.remove("active");

    });
}

MAIN.addEventListener("input", startCorrespondOver);
MAIN.addEventListener("mouseup", stopCorrespondOver);

/*----------------------------------For input-range end--------------------------------*/


/*----------------------------------For reset start--------------------------------*/

const startEditor = (event) => {

    if(event.target.classList.contains("btn")){
        BUTTON.forEach((elem) => {
            elem.classList.remove("btn-active");
        });
        event.target.classList.add("btn-active");
    }
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

EDITOR.addEventListener("click", startEditor);
/*----------------------------------For reset end--------------------------------*/


/*----------------------------------For next picture start--------------------------------*/
var pictureSrc="assets/img/img.jpg";
var base = '';
const baseNight = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/';
const baseMorning = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/';
const baseDay = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/';
const baseEvening = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/';
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
const imageContainer = document.querySelector('img');
const btnNext = document.querySelector('.btn-next');

function viewBgImage(src) {  
  const img = new Image();
    img.src = src;
    pictureSrc = src;
    drawPic(pictureSrc);
    console.log("pictureSrc of NEXT: ", pictureSrc);
    img.onload = () => {      
    imageContainer.setAttribute("src", `${src}`);
  }; 
}

function getImage() {
    let now = new Date();
    let hours=now.getHours();
        if ((hours>6)&&(hours<12)) {
            base = baseMorning;
        } else if ((hours>=12)&&(hours<18)) {
            base = baseDay;
        } else if ((hours>=18)&&(hours<00)) {
            base = baseEvening;
        } else {
                base = baseNight;
        }
    const index = i % images.length;
    const imageSrc = base + images[index];
    viewBgImage(imageSrc);
    i++;
    btnNext.disabled = true;
    setTimeout(function() { btnNext.disabled = false }, 1000);
}

btnNext.addEventListener('click', getImage);
/*----------------------------------For next picture end--------------------------------*/

/*----------------------------------For upload picture end--------------------------------*/

const btnLoad = document.querySelector('input[type="file"]');

function imgLoad() {
  const file = btnLoad.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    pictureSrc = reader.result;
    drawPic(pictureSrc);
    console.log("pictureSrc of LOAD: ", pictureSrc);
    imageContainer.setAttribute("src", `${img.src}`);
  }
  reader.readAsDataURL(file);
};

btnLoad.addEventListener('change', imgLoad);

/*----------------------------------For make canvas start--------------------------------*/

const canvas = document.querySelector('canvas');

  function drawPic(src) {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.setAttribute("src", `${src}`); 
    console.log("img.src of CANVAS: ", img.src);
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
    };  
  }
  drawPic(pictureSrc);
/*----------------------------------For make canvas end--------------------------------*/



/*----------------------------------For save picture start--------------------------------*/






/*----------------------------------For save picture end--------------------------------*/

/*----------------------------------For fullscreen start--------------------------------*/
const toggleFullScreen = function () {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  
const FULLSCREEN_BTN=document.querySelector(".fullscreen");
FULLSCREEN_BTN.addEventListener("mousedown", toggleFullScreen)