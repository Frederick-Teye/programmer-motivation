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

function fadeInAfterFadeOut(element, fadeInDuration) {
    setTimeout(() => {
        element.style.display = 'inline-block';
        element.style.transition = `opacity ${fadeInDuration}ms ease-in-out`;
        element.style.opacity = 1;
    }, 2000); // Wait for fade-out (2 seconds) before starting fade-in
}

function displayBatch(startIndex, batchSize) {
    items.forEach((item, index) => {
        if (index >= startIndex && index < startIndex + batchSize) {
            fadeInAfterFadeOut(item, 2000); // Fade in duration after fade out
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
