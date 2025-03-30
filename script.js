let mapElemnt = document.querySelector(".map");
let maincontainerElemnt = document.querySelector(".maincontainer");

let maincontainerW = parseFloat(getComputedStyle(maincontainerElemnt).width);
let maincontainerH = parseFloat(getComputedStyle(maincontainerElemnt).height);

mapElemnt.style.width = (maincontainerW / 40) + "px";
mapElemnt.style.height = (maincontainerH / 40) + "px";
console.log(getComputedStyle(mapElemnt).width);

