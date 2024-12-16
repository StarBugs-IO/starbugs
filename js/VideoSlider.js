class VideoSlider {
    constructor() {
        this.currentIndex = 0;
        this.videos = [
            { url: '/videos/video1.mp4' },
            { url: '/videos/video2.mp4' },
            { url: '/videos/video3.mp4' }
        ];
        this.currentVideo = document.getElementById('currentVideo');
        this.init();
    }

    init() {
        if (this.videos.length > 0) {
            this.loadVideo(0);
            
            document.addEventListener('click', () => {
                this.currentVideo.play().catch(error => {
                    console.log('Ошибка воспроизведения:', error);
                });
            }, { once: true });
        }
    }

    loadVideo(index) {
        if (this.videos.length > 0) {
            this.currentIndex = index;
            this.currentVideo.src = this.videos[index].url;
            this.currentVideo.load();
            if (!this.currentVideo.paused) {
                this.currentVideo.play().catch(error => {
                    console.log('Ошибка воспроизведения:', error);
                });
            }
        }
    }

    nextVideo() {
        let nextIndex = this.currentIndex + 1;
        // Если достигли конца списка, возвращаемся к началу
        if (nextIndex >= this.videos.length) {
            nextIndex = 0;
        }
        this.loadVideo(nextIndex);
    }

    previousVideo() {
        let prevIndex = this.currentIndex - 1;
        // Если достигли начала списка, переходим в конец
        if (prevIndex < 0) {
            prevIndex = this.videos.length - 1;
        }
        this.loadVideo(prevIndex);
    }
}