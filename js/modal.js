let currentImages = [];
let currentIndex = 0;

function openModal(...images) {
    currentImages = images;
    currentIndex = 0;
    document.getElementById('modalImg').src = currentImages[currentIndex];
    document.getElementById('photoModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}

function nextImage(event) {
    event.stopPropagation();
    if (currentImages.length === 0) return;
    currentIndex++;
    if (currentIndex >= currentImages.length) {
        closeModal();
    } else {
        document.getElementById('modalImg').src = currentImages[currentIndex];
    }
}