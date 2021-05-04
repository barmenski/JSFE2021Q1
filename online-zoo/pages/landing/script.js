
/*----------------------------------------Open/close pop-up start---------------------------------------*/
const coverElem = document.getElementById("cover");
const closeElem = document.querySelectorAll(".form__close");

const feedbackElem = document.getElementById("form-feedback");
const donatElem = document.getElementById("form-donat");
const payElem = document.getElementById("form-pay");

document.body.addEventListener ("click", (event) => {
  if (event.target.className=="testimonials__btn") { //нажали feedback, появилось окно feedback
    document.body.classList.add("notScrollable");
    coverElem.classList.remove("notVisible");
    feedbackElem.classList.remove("notVisible");
  } else if (event.target.className=="feedback__btn") {//нажали submit__btn, закрыли все
    document.body.classList.remove("notScrollable");
    coverElem.classList.add("notVisible");
    feedbackElem.classList.add("notVisible");
  }else if (event.target.className=="footer__btn") {//нажали donat, появилось окно donat
    document.body.classList.add("notScrollable");
    coverElem.classList.remove("notVisible");
    donatElem.classList.remove("notVisible");
  } else if (event.target.className=="donat__btn") {//нажали donat__btn (next) в окне  donat
    document.body.classList.add("notScrollable");
    coverElem.classList.remove("notVisible");
    payElem.classList.remove("notVisible"); //нажали donat__btn , значит запускаем окно pay
    donatElem.classList.add("notVisible");
  } else if (event.target.className=="pay__btn") {//нажали pay__btn , значит все закрыли
    document.body.classList.remove("notScrollable");
    coverElem.classList.add("notVisible");
    payElem.classList.add("notVisible");
    alert("Thank you for your donation!");
  } else if (event.target.className=="form__close") { //нажали на крестик
    document.body.classList.remove("notScrollable");
    coverElem.classList.add("notVisible");

    event.target.closest("div").classList.add("notVisible");
  } else return;
  }
);
/*----------------------------------------Open/close pop-up end---------------------------------------*/


/*----------------------------------------Left feedback start---------------------------------------*/

const nameField =  document.getElementById("name");
const emailField =  document.getElementById("email");
const feedbackField =  document.getElementById("text-feedback");

const feedbackButton = document.querySelector(".feedback__btn");

const validateFeedback = () => {
  if (nameField.validity.valid &&
    emailField.validity.valid &&
    feedbackField.validity.valid
      ){
        feedbackButton.classList.remove("invalid");
        feedbackButton.removeAttribute("disabled");
    } else {
      feedbackButton.classList.add("invalid");
      feedbackButton.setAttribute("disabled","");
    };
}

nameField.addEventListener("input", () => {
  validateFeedback();
})

emailField.addEventListener("input", () => {
  validateFeedback();
})

feedbackField.addEventListener("input", () => {
  validateFeedback();
})

/*----------------------------------------Left feedback end---------------------------------------*/

/*----------------------------------------Donat start---------------------------------------*/
const amountField =  document.getElementById("amount");
const textDonatField =  document.getElementById("text-donat");

const donatButton = document.querySelector(".donat__btn");

const validateDonat = () => {
  if (amountField.validity.valid &&
    textDonatField.validity.valid
      ){
      donatButton.classList.remove("invalid");
      donatButton.removeAttribute("disabled");
    } else {
      donatButton.classList.add("invalid");
      donatButton.setAttribute("disabled","");
    };
}

amountField.addEventListener("input", () => {
  validateDonat();
})

textDonatField.addEventListener("input", () => {
  validateDonat();
})

/*----------------------------------------Donat end---------------------------------------*/

/*----------------------------------------Pay start---------------------------------------*/
const cardNumberField =  document.getElementById("card-number");
const mmField = document.getElementById("mm");
const yyField = document.getElementById("yy");
const cardholderNameField = document.getElementById("cardholder-name");
const cvcField = document.getElementById("cvc");

const payButton = document.querySelector(".pay__btn");


const validatePay = () => {
  if ( cardNumberField.validity.valid &&
    mmField.validity.valid &&
    yyField.validity.valid &&
    cardholderNameField.validity.valid &&
    cvcField.validity.valid){
      payButton.classList.remove("invalid");
      payButton.removeAttribute("disabled");
    } else {
      payButton.classList.add("invalid");
      payButton.setAttribute("disabled","");
    };
}

cardNumberField.addEventListener("input", () => {
  validatePay();
})

mmField.addEventListener("input", () => {
  validatePay();
})

yyField.addEventListener("input", () => {
  validatePay();
})

cardholderNameField.addEventListener("input", () => {
  validatePay();
})

cvcField.addEventListener("input", () => {
  validatePay();
})

/*----------------------------------------Pay end---------------------------------------*/

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


