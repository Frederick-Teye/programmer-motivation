// Select the container and items
const displayContainer = document.querySelector('.tools-info-images-section');
const items = displayContainer.querySelectorAll('.tools-info-image-coat');

// Number of items to display at a time
function findBatchSize() {
    if (window.innerWidth < 729) {
        return 3;
    } else {
        return 4;
    }
}

let batchSize = findBatchSize();

// Index to track currently displayed batch
let currentIndex = 0;

function fadeOut(element, duration) {
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.display = 'none';
    }, duration);
}

function fadeIn(element, duration) {
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    element.style.display = 'inline-block';
    setTimeout(() => {
        element.style.opacity = 1;
    }, 100); // Delay the start of the fade-in effect
}

function displayBatch(startIndex, batchSize) {
    items.forEach((item, index) => {
        if (index >= startIndex && index < startIndex + batchSize) {
            fadeIn(item, 2000); // Fade in duration
        } else {
            fadeOut(item, 2000); // Fade out duration
        }
    });
}

displayBatch(currentIndex, batchSize); // Initial display of the first batch

function cycleBatches(batchSize) {
    currentIndex += batchSize;
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    displayBatch(currentIndex, batchSize);
}

function displayBatchWithDynamicSize() {
    const newBatchSize = findBatchSize();
    cycleBatches(newBatchSize);
}

window.addEventListener('resize', displayBatchWithDynamicSize);
displayBatchWithDynamicSize();

setInterval(() => {
    displayBatchWithDynamicSize();
}, 5000);
