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