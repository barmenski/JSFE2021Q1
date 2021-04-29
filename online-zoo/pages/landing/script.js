const state = {};
const carouselList = document.querySelector('.carousel-list');
const carouselItemsLi = document.querySelectorAll('.carousel-list__item');
//console.log(carouselItemsLi);
const carouselItems = document.querySelectorAll('.carousel-item__img');
const elems = Array.from(carouselItems);


carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  //console.log(newActive);
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

