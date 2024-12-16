// Массив данных о видеороликах
const videos = [
    {
        src: 'assets/videos/video1.mp4',
        title: 'Видео 1',
        preview: 'assets/previews/preview1.jpg'
    },
    {
        src: 'assets/videos/video2.mp4',
        title: 'Видео 2',
        preview: 'assets/previews/preview2.jpg'
    },
    {
        src: 'assets/videos/video3.mp4',
        title: 'Видео 3',
        preview: 'assets/previews/preview3.jpg'
    }
];

let currentIndex = 0;
const maxSwipes = 10;

function loadNextVideo() {
    console.log('Загружаем следующее видео...');
    if (currentIndex >= videos.length || currentIndex >= maxSwipes) {
        alert('Вы достигли лимита просмотров.');
        return;
    }

    const nextVideo = videos[currentIndex];
    document.getElementById('currentVideo').src = nextVideo.src;
    document.getElementById('currentVideo').load();
    currentIndex++;

    document.getElementById('video-container').classList.add('fade-out');

    setTimeout(() => {
        document.getElementById('video-container').classList.remove('fade-out');
    }, 500);
}

function loadPreviousVideo() {
    console.log('Возвращаемся к предыдущему видео...');
    if (currentIndex <= 0) {
        alert('Это первое видео.');
        return;
    }

    currentIndex--;
    const previousVideo = videos[currentIndex];
    document.getElementById('currentVideo').src = previousVideo.src;
    document.getElementById('currentVideo').load();

    document.getElementById('video-container').classList.add('fade-out');

    setTimeout(() => {
        document.getElementById('video-container').classList.remove('fade-out');
    }, 500);
}

function like() {
    const likeButton = event.currentTarget;
    const icon = likeButton.querySelector('i');
    const span = likeButton.querySelector('span');
    
    if (!likeButton.classList.contains('liked')) {
        likeButton.classList.add('liked');
        icon.classList.remove('far');
        icon.classList.add('fas');
        const currentLikes = parseInt(span.textContent);
        span.textContent = (currentLikes + 1).toString();
    } else {
        likeButton.classList.remove('liked');
        icon.classList.remove('fas');
        icon.classList.add('far');
        const currentLikes = parseInt(span.textContent);
        span.textContent = (currentLikes - 1).toString();
    }
}

function repost() {
    console.log('Репост');
}

function addToCart() {
    console.log('Добавлено в корзину');
}

function profile() {
    console.log('Перейти в профиль');
}

function likes() {
    console.log('Посмотреть лайки');
}

function cart() {
    console.log('Открыть корзину');
}

// Добавляем новые функции
function comment() {
    console.log('Открыть комментарии');
}

function share() {
    console.log('Поделиться');
}

// Инициализация жестов
document.addEventListener("DOMContentLoaded", function () {
    var options = {
        recognizers: [
            [Hammer.Swipe, { direction: Hammer.DIRECTION_UP }],
            [Hammer.Swipe, { direction: Hammer.DIRECTION_DOWN }]
        ]};
    var hammer = new Hammer(document.body, options);
    hammer.on('swipeup', function (ev) {
        console.log('Swipe up detected!');
        loadNextVideo();
    });
    hammer.on('swipedown', function (ev) {
        console.log('Swipe down detected!');
        loadPreviousVideo();
    });
});

// Загрузка первого видео при старте
window.onload = function() {
    loadNextVideo();
};

document.addEventListener('wheel', function(event) {
    // Предотвращаем стандартную прокрутку страницы
    event.preventDefault();
    
    // Определяем направление прокрутки
    if (event.deltaY < 0) {
        // Прокрутка вверх - предыдущее видео
        videoSlider.previousVideo();
    } else {
        // Прокрутка вниз - следующее видео
        videoSlider.nextVideo();
    }
}, { passive: false });

// Также добавьте в начало файла
document.addEventListener('DOMContentLoaded', function() {
    // Отключаем стандартную прокрутку страницы
    document.body.style.overflow = 'hidden';
});