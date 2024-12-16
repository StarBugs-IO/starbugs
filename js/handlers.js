const handlers = {
    like() {
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
    },

    repost() {
        console.log('Репост');
    },

    addToCart() {
        const cartCount = document.getElementById('cartCount');
        const currentCount = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = currentCount + 1;
        
        if (cartCount.style.display === 'none') {
            cartCount.style.display = 'flex';
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
    },

    profile() {
        console.log('Перейти в профиль');
    },

    likes() {
        console.log('Посмотреть лайки');
    },

    cart() {
        console.log('Открыть корзину');
    },

    comment() {
        console.log('Открыть комментарии');
    },

    share() {
        console.log('Поделиться');
    }
}; 