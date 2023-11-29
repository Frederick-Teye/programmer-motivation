// Select the container and items
const displayContainer = document.querySelector('.tools-info-images-section');
const items = displayContainer.querySelectorAll('.tools-info-image-coat');

// Number of items to display at a time
const batchSize = 5;

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
    element.style.display = 'block';
    setTimeout(() => {
        element.style.opacity = 1;
    }, 100); // Delay the start of the fade-in effect
}

// Function to display a batch of items
function displayBatch(startIndex) {
    // Hide all items
    items.forEach(item => {
        item.style.display = 'none';
    });

    // Display the next batch
    for (let i = startIndex; i < startIndex + batchSize; i++) {
        if (items[i]) {
            items[i].style.display = 'block';
        }
    }
}

// Initial display of the first batch
displayBatch(currentIndex);

// Function to cycle through batches (for example, move forward)
function cycleBatches() {
    // Update the index for the next batch
    currentIndex += batchSize;

    // Check if we reached the end, if so, go back to the start
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    // Display the next batch
    displayBatch(currentIndex);
}

// Set an interval to cycle through batches
setInterval(cycleBatches, 5000);
