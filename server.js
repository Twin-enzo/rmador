// Simple Countdown Timer (for Progress Bar)
// You can dynamically adjust the progress as users sign up.

let progressBar = document.querySelector('.progress-fill');
let progressPercent = 25; // Initial progress (change as needed)

function updateProgressBar() {
    progressBar.style.width = `${progressPercent}%`;
    if (progressPercent < 100) {
        progressPercent += 5; // Increment progress every few seconds (for example)
    }
}

// Call this function to update the progress bar
setInterval(updateProgressBar, 2000);
