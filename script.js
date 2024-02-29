//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentCircle = 0;

// Initialize progress bar
updateProgressBar();

// Add event listeners to buttons
prevButton.addEventListener('click', () => {
  if (currentCircle > 0) {
    currentCircle--;
    updateProgressBar();
  }
});

nextButton.addEventListener('click', () => {
  if (currentCircle < circles.length - 1) {
    currentCircle++;
    updateProgressBar();
  }
});

// Function to update progress bar
function updateProgressBar() {
  circles.forEach((circle, index) => {
    if (index === currentCircle) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Enable/disable buttons based on current circle
  prevButton.disabled = currentCircle === 0;
  nextButton.disabled = currentCircle === circles.length - 1;
}
