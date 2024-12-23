// HTML Structure
const sliderContainer = document.createElement('div');
sliderContainer.className = 'slider-container';

const sliderWrapper = document.createElement('div');
sliderWrapper.className = 'slider-wrapper';
sliderContainer.appendChild(sliderWrapper);

const prevButton = document.createElement('button');
prevButton.className = 'slider-button prev';
prevButton.textContent = 'Prev';
sliderContainer.appendChild(prevButton);

const nextButton = document.createElement('button');
nextButton.className = 'slider-button next';
nextButton.textContent = 'Next';
sliderContainer.appendChild(nextButton);

const dotsContainer = document.createElement('div');
dotsContainer.className = 'dots-container';
sliderContainer.appendChild(dotsContainer);

document.body.appendChild(sliderContainer);

// JavaScript Implementation
const images = [
    { src: 'img/1.jpg', width: 800, height: 600 },
    { src: 'img/2.jpg', width: 1024, height: 768 },
    { src: 'img/3.jpg', width: 640, height: 480 }, // Add your image URLs and dimensions here
];

let currentIndex = 0;

function renderSlider() {
    sliderWrapper.innerHTML = '';
    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex].src;
    imgElement.className = 'slider-image';
    imgElement.style.width = '100%';
    imgElement.style.height = 'auto';
    sliderWrapper.style.height = '500px'; // Fixed height for the slider
    sliderWrapper.style.display = 'flex';
    sliderWrapper.style.justifyContent = 'center';
    sliderWrapper.style.alignItems = 'center';
    sliderWrapper.appendChild(imgElement);

    // Update button visibility
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex === images.length - 1 ? 'none' : 'block';

    // Render dots
    dotsContainer.innerHTML = '';
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === currentIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            currentIndex = index;
            renderSlider();
        });
        dotsContainer.appendChild(dot);
    });
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderSlider();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        renderSlider();
    }
});

renderSlider();

// CSS for styling (add this in your CSS file or within a <style> tag)
const style = document.createElement('style');
style.textContent = `
  .slider-container {
      position: relative;
      width: 80%;
      margin: auto;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .slider-wrapper {
      width: 100%;
      height: 500px; /* Fixed height for consistent slider size */
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .slider-image {
      display: block;
      max-width: 100%;
      max-height: 100%;
  }

  .slider-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
  }

  .prev {
      left: 10px;
  }

  .next {
      right: 10px;
  }

  .dots-container {
      display: flex;
      justify-content: center;
      margin-top: 10px;
  }

  .dot {
      width: 10px;
      height: 10px;
      background-color: lightgray;
      border-radius: 50%;
      margin: 0 5px;
      cursor: pointer;
  }

  .dot.active {
      background-color: gray;
  }
`;
document.head.appendChild(style);
