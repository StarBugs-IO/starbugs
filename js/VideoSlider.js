class VideoSlider {
    constructor() {
        this.currentIndex = 0;
        this.videos = [
            { url: '/videos/video1.mp4' },
            { url: '/videos/video2.mp4' },
            { url: '/videos/video3.mp4' }
        ];
        this.currentVideo = document.getElementById('currentVideo');
        this.videoContainer = document.getElementById('video-container');
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
        if (nextIndex >= this.videos.length) {
            nextIndex = 0;
        }
        this.loadVideo(nextIndex);
        
        if (this.videoContainer) {
            this.videoContainer.classList.add('slide-up');
            document.querySelector('.controls').classList.add('slide-up');
            
            setTimeout(() => {
                this.videoContainer.classList.remove('slide-up');
                document.querySelector('.controls').classList.remove('slide-up');
            }, 500);
        }
    }

    previousVideo() {
        let prevIndex = this.currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = this.videos.length - 1;
        }
        this.loadVideo(prevIndex);
        
        if (this.videoContainer) {
            this.videoContainer.classList.add('slide-down');
            document.querySelector('.controls').classList.add('slide-down');
            
            setTimeout(() => {
                this.videoContainer.classList.remove('slide-down');
                document.querySelector('.controls').classList.remove('slide-down');
            }, 500);
        }
    }
}