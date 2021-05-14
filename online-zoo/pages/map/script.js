const mapImage = document.querySelector(".map__img");
const wrapper = document.querySelector(".map__wrapper");

let topIndent = 0;
let leftIndent = 0;


const calculateCoords = (elem) => {
    var box = elem.getBoundingClientRect();
    topIndent = box.top + pageYOffset;
    leftIndent = box.left + pageXOffset;
    left
}

const moveAt = (e) => {
    const shiftX = e.pagesX - leftIndent;
    const shiftY = e.pagesY - topIndent;
}

const stopDrag = () => {
    document.onmousemove = null;
}

mapImage.addEventListener("mousedown", (e) => {

    const {top, left} = getCoords(mapImage);
    let shiftX = e.pageX - left;
    let shiftY = e.pageY - top;


    const moveAt = (e) => {
        mapImage.style.left= e.pageX - shiftX + 'px';
        mapImage.style.top = e.pageY - shiftY + 'px';
    };


    moveAt(e);

    document.onmousemove = function(e) {
        moveAt(e);
    };

    document.addEventListener("mousemove", moveAt);

});

mapImage.addEventListener("mouseup", () => {

});

mapImage.ondragstart = function() {
    return false;
};