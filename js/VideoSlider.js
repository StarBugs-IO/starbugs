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
        
        // Состояния слайдера
        this.STATE = {
            IDLE: 'IDLE',
            TRANSITIONING: 'TRANSITIONING'
        };
        
        this.currentState = this.STATE.IDLE;
        this.lastTransitionTime = 0;
        this.transitionCooldown = 1000; // 1 секунда между переходами
        
        this.init();
    }

    canTransition() {
        const now = Date.now();
        return this.currentState === this.STATE.IDLE && 
               (now - this.lastTransitionTime) >= this.transitionCooldown;
    }

    startTransition() {
        if (!this.canTransition()) return false;
        this.currentState = this.STATE.TRANSITIONING;
        this.lastTransitionTime = Date.now();
        return true;
    }

    endTransition() {
        setTimeout(() => {
            this.currentState = this.STATE.IDLE;
        }, this.transitionCooldown);
    }

    nextVideo() {
        if (!this.startTransition()) return false;

        const nextIndex = (this.currentIndex + 1) % this.videos.length;
        this.loadVideo(nextIndex);
        
        this.videoContainer.classList.add('slide-up');
        document.querySelector('.controls').classList.add('slide-up');
        
        setTimeout(() => {
            this.videoContainer.classList.remove('slide-up');
            document.querySelector('.controls').classList.remove('slide-up');
            this.endTransition();
        }, 500);
        
        return true;
    }

    previousVideo() {
        if (!this.startTransition()) return false;

        const prevIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
        this.loadVideo(prevIndex);
        
        this.videoContainer.classList.add('slide-down');
        document.querySelector('.controls').classList.add('slide-down');
        
        setTimeout(() => {
            this.videoContainer.classList.remove('slide-down');
            document.querySelector('.controls').classList.remove('slide-down');
            this.endTransition();
        }, 500);
        
        return true;
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

    init() {
        if (this.videos.length > 0) {
            this.loadVideo(0);
        }
    }
}