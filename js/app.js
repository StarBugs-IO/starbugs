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
let isScrolling = false;

document.addEventListener('DOMContentLoaded', function() {
    videoSlider = new VideoSlider();
    
    // Добавляем обработчик колеса мыши с защитой от множественных прокруток
    document.addEventListener('wheel', function(event) {
        event.preventDefault();
        
        if (isScrolling) return; // Если уже выполняется прокрутка, игнорируем новые события
        
        isScrolling = true;
        
        if (event.deltaY < 0) {
            videoSlider.previousVideo();
        } else {
            videoSlider.nextVideo();
        }
        
        // Сбрасываем флаг через небольшую задержку
        setTimeout(() => {
            isScrolling = false;
        }, 1000); // Задержка в 500мс перед следующей возможной прокруткой
        
    }, { passive: false });

    // Настройка корзины
    const cartButton = document.getElementById('cartButton');
    const cartCount = document.getElementById('cartCount');
    let count = 0;

    cartButton.addEventListener('click', function() {
        count++;
        cartCount.textContent = count;
        
        if (count === 1) {
            cartCount.style.display = 'flex';
            cartCount.style.animation = 'none';
            void cartCount.offsetWidth;
            cartCount.style.animation = 'scaleIn 0.3s ease';
        } else {
            cartCount.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 100);
        }

        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    });

    // Предотвращаем стандартную прокрутку
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';
}); 