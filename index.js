// Select the container and items
const displayContainer = document.querySelector('.tools-info-images-section');
const items = displayContainer.querySelectorAll('.tools-info-image-coat');

// Number of items to display at a time
const batchSize = 5;

// Index to track currently displayed batch
let currentIndex = 0;

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