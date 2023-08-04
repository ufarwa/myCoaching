/* tailbox 1 text area */
document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('text-container');
    textContainer.classList.add('show');
  });
  

// box 3 started

let isAnimating = false;

    function animateCounting(targetValue, duration, percentageValue) {
      const startValue = parseInt(percentageValue.textContent);
      const fps = 30; // Frames per second
      const frameDuration = 1000 / fps;
      const totalFrames = Math.round(duration / frameDuration);
      let currentFrame = 0;

      function updateCount() {
        const progress = currentFrame / totalFrames;
        const value = Math.round(startValue + (targetValue - startValue) * progress);
        percentageValue.textContent = value + '%';
        currentFrame++;

        if (currentFrame <= totalFrames) {
          requestAnimationFrame(updateCount);
        }
      }

      updateCount();
    }

    function startAnimation(card) {
      if (!isAnimating) {
        isAnimating = true;
        const percentageValue = card.querySelector('.title-font.text-3xl.text-gray-900');
        const currentValue = parseInt(percentageValue.textContent);

        // Reset the percentage value to 0% on hover
        percentageValue.textContent = '0%';

        // Start the animation from 0% to the original value (e.g., 45%)
        animateCounting(currentValue, 2000, percentageValue); // Change the duration as per your preference

        // Delay the reset of isAnimating to prevent starting the animation multiple times
        setTimeout(() => {
          isAnimating = false;
        }, 2000); // Adjust the timeout to match the animation duration
      }
    }

    // box 3 ended