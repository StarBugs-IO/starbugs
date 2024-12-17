// Конфигурация видео
const videos = [
    {
        src: '/assets/videos/video1.mp4',
        title: 'Видео 1',
        preview: '/assets/previews/preview1.jpg'
    },
    {
        src: '/assets/videos/video2.mp4',
        title: 'Видео 2',
        preview: '/assets/previews/preview2.jpg'
    },
    {
        src: '/assets/videos/video3.mp4',
        title: 'Видео 3',
        preview: '/assets/previews/preview3.jpg'
    }
];

let videoSlider;

document.addEventListener('DOMContentLoaded', function() {
    videoSlider = new VideoSlider();
    
    // Обработчик колеса мыши
    const wheelHandler = function(event) {
        event.preventDefault();
        
        if (event.deltaY < 0) {
            videoSlider.previousVideo();
        } else {
            videoSlider.nextVideo();
        }
    };
    
    document.addEventListener('wheel', wheelHandler, { passive: false });

    // Настройка Hammer.js
    const videoContainer = document.getElementById('video-container');
    const hammer = new Hammer(videoContainer);
    
    hammer.get('swipe').set({
        direction: Hammer.DIRECTION_VERTICAL,
        threshold: 50,
        velocity: 0.3
    });
    
    hammer.on('swipeup swipedown', function(event) {
        if (event.type === 'swipeup') {
            videoSlider.nextVideo();
        } else if (event.type === 'swipedown') {
            videoSlider.previousVideo();
        }
    });

    // Отключаем стандартный скролл
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';
}); 