# Видео маркет - Video Market App

## Описание
Веб-приложение для просмотра видео-контента с возможностью навигации с помощью колеса мыши. Приложение поддерживает циклическое переключение между видео, добавление в корзину и систему лайков.

## Функциональность
- Просмотр видео
- Навигация с помощью колеса мыши (вверх/вниз)
- Циклическое переключение видео
- Лайки видео
- Корзина покупок
- Репосты
- Профиль пользователя

## Технические требования
- Современный веб-браузер с поддержкой HTML5
- Поддержка JavaScript
- Подключение к интернету для загрузки видео-контента

## Структура проекта
```
project/
├── assets/
│   └── css/
│       └── styles.css
├── js/
│   ├── app.js
│   ├── VideoSlider.js
│   └── handlers.js
├── videos/
│   ├── video1.mp4
│   ├── video2.mp4
│   └── video3.mp4
└── index.html
```

## Использование
- Прокрутка колеса мыши вверх -> предыдущее видео
- Прокрутка колеса мыши вниз -> следующее видео
- Клик по кнопке лайка -> поставить/убрать лайк
- Клик по кнопке корзины -> добавить в корзину
- Клик по кнопке репоста -> поделиться видео

## Зависимости
- Font Awesome 5.15.4
- Hammer.js 2.0.8

## Особенности
- Автоматическое циклическое переключение видео
- Защита от множественных прокруток
- Предзагрузка следующего видео
- Адаптивный дизайн
- Поддержка мобильных устройств

## Лицензия
MIT License

## Авторы
Stanislav Farfudinov

## Контакты
odin_za_vseh@icloud.com
