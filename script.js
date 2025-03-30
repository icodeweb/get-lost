let maincontainerElement = document.querySelector(".maincontainer");
let maincontainerW = parseFloat(getComputedStyle(maincontainerElement).width);
let maincontainerH = parseFloat(getComputedStyle(maincontainerElement).height);

let mapElemnt = document.querySelector(".map");
let pageMapRatio = .03;

mapElemnt.style.width = (maincontainerW * pageMapRatio) + "px";
mapElemnt.style.height = (maincontainerH * pageMapRatio) + "px";

let LocationElemnent = document.querySelector(".location");

// Y
const scrollHeight = document.documentElement.scrollHeight;
const clientHeight = document.documentElement.clientHeight;
// X
const scrollWidth = document.documentElement.scrollWidth;
const clientWidth = document.documentElement.clientWidth;
let pageLocationRatio = .004;
let screenRatio = clientWidth / clientHeight;
console.log(clientWidth, clientHeight, screenRatio);

LocationElemnent.style.width = scrollWidth / 100 + "px";
LocationElemnent.style.height = (parseFloat(LocationElemnent.style.width) * screenRatio) + "px"

// LocationElemnent.style.width = (maincontainerW * pageLocationRatio) + "px";
// LocationElemnent.style.height = (maincontainerH * pageLocationRatio) + "px";

mapElemnt.style.backgroundImage = getComputedStyle(maincontainerElement).backgroundImage;
mapElemnt.style.backgroundSize = "cover"

function moveLocation(top, left) {
    LocationElemnent.style.left = `${left}%`;
    LocationElemnent.style.top = `${top}%`;
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollRight = window.scrollX;
    const scrollPercentageY = (scrollTop / (scrollHeight - clientHeight)) * 100;
    const scrollPercentageX = (scrollRight / (scrollWidth - clientWidth)) * 100;

    moveLocation(scrollPercentageY, scrollPercentageX)
    // console.log(document.documentElement);
    console.clear()
    console.log(`Y percentage : ${scrollPercentageY.toFixed(2)}%`);
    console.log(`X percentage : ${scrollPercentageX.toFixed(2)}%`);
});