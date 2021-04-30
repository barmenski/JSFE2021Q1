/*----------------------------------------Left feedback start---------------------------------------*/

const coverElem = document.getElementById("cover");
const formElem = document.getElementById("form-feedback");
const closeElem = document.querySelector(".feedback__close");
const sendButton = document.getElementById("send");
const feedBackButton = document.querySelector(".testimonials__btn");

const nameField =  document.getElementById("name");
const emailField =  document.getElementById("email");
const feedbackField =  document.getElementById("text-feedback");

const validate = () => {
  if (nameField.validity.valid &&
    emailField.validity.valid &&
    feedbackField.validity.valid){
  sendButton.classList.remove("invalid");
  sendButton.removeAttribute("disabled");
    } else {
      sendButton.classList.add("invalid");
      sendButton.setAttribute("disabled","");
    }
}

feedBackButton.addEventListener("click", ()=>{
  document.body.classList.add("notScrollable");
  coverElem.classList.remove("notVisible");
  formElem.classList.remove("notVisible");
})

coverElem.addEventListener("click", ()=>{
  document.body.classList.remove("notScrollable");
  coverElem.classList.add("notVisible");
  formElem.classList.add("notVisible");
})

closeElem.addEventListener("click", ()=>{
  document.body.classList.remove("notScrollable");
  coverElem.classList.add("notVisible");
  formElem.classList.add("notVisible");
})

sendButton.addEventListener("click", ()=>{
  document.body.classList.remove("notScrollable");
  coverElem.classList.add("notVisible");
  formElem.classList.add("notVisible");
})

nameField.addEventListener("input", () => {
  validate();
})

emailField.addEventListener("input", () => {
  validate();
})

feedbackField.addEventListener("input", () => {
  validate();
})

/*----------------------------------------Left feedback end---------------------------------------*/


/*----------------------------------------Carousel start---------------------------------------*/



const state = {};
const carouselList = document.querySelector('.carousel-list');
const carouselItemsLi = document.querySelectorAll('.carousel-list__item');
const carouselItems = document.querySelectorAll('.carousel-item__img');
const elems = Array.from(carouselItems);


carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel-item__img');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
  for (let elem of carouselItemsLi) {
    elem.dataset.pos=elem.firstElementChild.dataset.pos;
    }
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
}

/*----------------------------------------Carousel end---------------------------------------*/