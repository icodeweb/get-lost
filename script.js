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
        // mapElement.style.backgroundSize = `${mainContainer.offsetWidth}px ${mainContainer.offsetHeight}px`;

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