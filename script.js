// let maincontainerElement = document.querySelector(".maincontainer");
// let maincontainerW = parseFloat(getComputedStyle(maincontainerElement).width);
// let maincontainerH = parseFloat(getComputedStyle(maincontainerElement).height);

// let mapElemnt = document.querySelector(".map");
// let pageMapRatio = .03;

// mapElemnt.style.width = (maincontainerW * pageMapRatio) + "px";
// mapElemnt.style.height = (maincontainerH * pageMapRatio) + "px";

// let LocationElemnent = document.querySelector(".location");

// // Y
// const scrollHeight = document.documentElement.scrollHeight;
// const clientHeight = document.documentElement.clientHeight;
// // X
// const scrollWidth = document.documentElement.scrollWidth;
// const clientWidth = document.documentElement.clientWidth;
// let pageLocationRatio = .004;
// let screenRatio = clientWidth / clientHeight;
// console.log(clientWidth, clientHeight, screenRatio);

// LocationElemnent.style.width = scrollWidth / 100 + "px";
// LocationElemnent.style.height = (parseFloat(LocationElemnent.style.width) * screenRatio) + "px"

// // LocationElemnent.style.width = (maincontainerW * pageLocationRatio) + "px";
// // LocationElemnent.style.height = (maincontainerH * pageLocationRatio) + "px";

// mapElemnt.style.backgroundImage = getComputedStyle(maincontainerElement).backgroundImage;
// mapElemnt.style.backgroundSize = "cover"

// function moveLocation(top, left) {
//     LocationElemnent.style.left = `${left}%`;
//     LocationElemnent.style.top = `${top}%`;
// }

// window.addEventListener("scroll", () => {
//     const scrollTop = window.scrollY;
//     const scrollRight = window.scrollX;
//     const scrollPercentageY = (scrollTop / (scrollHeight - clientHeight)) * 100;
//     const scrollPercentageX = (scrollRight / (scrollWidth - clientWidth)) * 100;

//     moveLocation(scrollPercentageY, scrollPercentageX)
//     // console.log(document.documentElement);
//     console.clear()
//     console.log(`Y percentage : ${scrollPercentageY.toFixed(2)}%`);
//     console.log(`X percentage : ${scrollPercentageX.toFixed(2)}%`);
// });

// let maincontainerElement = document.querySelector(".maincontainer");
// let maincontainerW = parseFloat(getComputedStyle(maincontainerElement).width);
// let maincontainerH = parseFloat(getComputedStyle(maincontainerElement).height);

// // Set up the map element
// let mapElement = document.querySelector(".map");
// let pageMapRatio = 0.15; // Increased for better visibility (adjust as needed)

// mapElement.style.width = (maincontainerW * pageMapRatio) + "px";
// // Maintain same aspect ratio as main container
// mapElement.style.height = (mapElement.offsetWidth * (maincontainerH / maincontainerW)) + "px";

// // Set up the location indicator
// let locationElement = document.querySelector(".location");

// // Calculate screen and content dimensions
// const scrollHeight = document.documentElement.scrollHeight;
// const clientHeight = document.documentElement.clientHeight;
// const scrollWidth = document.documentElement.scrollWidth;
// const clientWidth = document.documentElement.clientWidth;

// // Size the location indicator to represent the viewport proportion
// const viewportToContentWidthRatio = clientWidth / scrollWidth;
// const viewportToContentHeightRatio = clientHeight / scrollHeight;

// locationElement.style.width = (mapElement.offsetWidth * viewportToContentWidthRatio) + "px";
// locationElement.style.height = (mapElement.offsetHeight * viewportToContentHeightRatio) + "px";

// // Style the map with the same background
// mapElement.style.backgroundImage = getComputedStyle(maincontainerElement).backgroundImage;
// // mapElement.style.backgroundSize = `${scrollWidth}px ${scrollHeight}px`;

// function moveLocation() {
//     const scrollTop = window.scrollY;
//     const scrollLeft = window.scrollX;

//     // Calculate percentage scrolled (0-100)
//     const scrollPercentageY = (scrollTop / (scrollHeight - clientHeight)) * 100;
//     const scrollPercentageX = (scrollLeft / (scrollWidth - clientWidth)) * 100;

//     // Position the location element within the map
//     locationElement.style.left = `calc(${scrollPercentageX}% - ${locationElement.offsetWidth / 2}px)`;
//     locationElement.style.top = `calc(${scrollPercentageY}% - ${locationElement.offsetHeight / 2}px)`;

//     console.clear();
//     console.log(`Y position: ${scrollPercentageY.toFixed(2)}%`);
//     console.log(`X position: ${scrollPercentageX.toFixed(2)}%`);
// }

// window.addEventListener("scroll", moveLocation);
// window.addEventListener("resize", () => {
//     // Recalculate dimensions on resize
//     maincontainerW = parseFloat(getComputedStyle(maincontainerElement).width);
//     maincontainerH = parseFloat(getComputedStyle(maincontainerElement).height);

//     mapElement.style.width = (maincontainerW * pageMapRatio) + "px";
//     mapElement.style.height = (mapElement.offsetWidth * (maincontainerH / maincontainerW)) + "px";

//     const newViewportToContentWidthRatio = clientWidth / scrollWidth;
//     const newViewportToContentHeightRatio = clientHeight / scrollHeight;

//     locationElement.style.width = (mapElement.offsetWidth * newViewportToContentWidthRatio) + "px";
//     locationElement.style.height = (mapElement.offsetHeight * newViewportToContentHeightRatio) + "px";

//     moveLocation();
// });

// // Initial positioning
// moveLocation();

// document.addEventListener('DOMContentLoaded', function () {
//     // Main elements
//     const mainContainer = document.querySelector(".maincontainer");
//     const mapElement = document.querySelector(".map");
//     const locationElement = document.querySelector(".location");

//     // Set map size (adjust ratio as needed)
//     const mapRatio = 0.15; // 15% of viewport width
//     const mapWidth = window.innerWidth * mapRatio;
//     const mapHeight = mapWidth * (mainContainer.offsetHeight / mainContainer.offsetWidth);

//     mapElement.style.width = `${mapWidth}px`;
//     mapElement.style.height = `${mapHeight}px`;

//     // Set location indicator size based on viewport/content ratio
//     const viewportWidthRatio = window.innerWidth / mainContainer.offsetWidth;
//     const viewportHeightRatio = window.innerHeight / mainContainer.offsetHeight;

//     locationElement.style.width = `${mapWidth * viewportWidthRatio}px`;
//     locationElement.style.height = `${mapHeight * viewportHeightRatio}px`;

//     // Set map background to match main container
//     mapElement.style.backgroundImage = getComputedStyle(mainContainer).backgroundImage;
//     mapElement.style.backgroundSize = `${mainContainer.offsetWidth}px ${mainContainer.offsetHeight}px`;

//     function updatePosition() {
//         const scrollX = window.scrollX;
//         const scrollY = window.scrollY;

//         // Calculate scroll percentages (0-100)
//         const maxScrollX = mainContainer.offsetWidth - window.innerWidth;
//         const maxScrollY = mainContainer.offsetHeight - window.innerHeight;

//         const percentX = (scrollX / maxScrollX) * 100;
//         const percentY = (scrollY / maxScrollY) * 100;

//         // Position the location indicator
//         locationElement.style.left = `${percentX}%`;
//         locationElement.style.top = `${percentY}%`;

//         // Debug output
//         console.clear();
//         console.log(`Position: X ${percentX.toFixed(1)}%, Y ${percentY.toFixed(1)}%`);
//     }

//     // Handle window events
//     window.addEventListener('scroll', updatePosition);
//     window.addEventListener('resize', function () {
//         // Update sizes on resize
//         const newMapWidth = window.innerWidth * mapRatio;
//         const newMapHeight = newMapWidth * (mainContainer.offsetHeight / mainContainer.offsetWidth);

//         mapElement.style.width = `${newMapWidth}px`;
//         mapElement.style.height = `${newMapHeight}px`;

//         const newViewportWidthRatio = window.innerWidth / mainContainer.offsetWidth;
//         const newViewportHeightRatio = window.innerHeight / mainContainer.offsetHeight;

//         locationElement.style.width = `${newMapWidth * newViewportWidthRatio}px`;
//         locationElement.style.height = `${newMapHeight * newViewportHeightRatio}px`;

//         updatePosition();
//     });

//     // Initial position update
//     updatePosition();
// });


document.addEventListener('DOMContentLoaded', function () {
    const mainContainer = document.querySelector('.maincontainer');
    const mapElement = document.querySelector('.map');
    const locationElement = document.querySelector('.location');

    // Set map size (15% of window width)
    const updateSizes = () => {
        const mapRatio = 0.15;
        const mapWidth = window.innerWidth * mapRatio;
        const mapHeight = mapWidth * (mainContainer.offsetHeight / mainContainer.offsetWidth);

        mapElement.style.width = `${mapWidth}px`;
        mapElement.style.height = `${mapHeight}px`;

        // Set location indicator size (viewport ratio)
        const viewportRatioX = window.innerWidth / mainContainer.offsetWidth;
        const viewportRatioY = window.innerHeight / mainContainer.offsetHeight;

        locationElement.style.width = `${mapWidth * viewportRatioX}px`;
        locationElement.style.height = `${mapHeight * viewportRatioY}px`;

        // Set map background to match main container
        mapElement.style.backgroundImage = getComputedStyle(mainContainer).backgroundImage;
        mapElement.style.backgroundSize = `${mainContainer.offsetWidth}px ${mainContainer.offsetHeight}px`;
    };

    // Update position of location indicator
    const updatePosition = () => {
        const scrollableWidth = mainContainer.offsetWidth - window.innerWidth;
        const scrollableHeight = mainContainer.offsetHeight - window.innerHeight;

        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        const percentX = (scrollX / scrollableWidth) * 100;
        const percentY = (scrollY / scrollableHeight) * 100;

        locationElement.style.left = `${percentX}%`;
        locationElement.style.top = `${percentY}%`;
    };

    // Event listeners
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', () => {
        updateSizes();
        updatePosition();
    });

    // Initial setup
    updateSizes();
    updatePosition();
});