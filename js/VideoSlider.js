class VideoSlider {
    constructor() {
        this.currentIndex = 0;
        this.isAnimating = false;
        this.touchStartY = 0;
        this.touchEndY = 0;
        this.containers = new Map();
        this.preloadDistance = 2;
        
        this.init();
    }

    init() {
        this.sliderContainer = document.createElement('div');
        this.sliderContainer.className = 'slider-container';
        document.body.appendChild(this.sliderContainer);

        this.preloadVideos();
        this.initEventListeners();
    }

    // ... (остальные методы класса VideoSlider)
} 