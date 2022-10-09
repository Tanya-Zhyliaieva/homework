'use strict'

lightGallery(document.getElementById('light__gallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 1000,
    thumbnail: true,
    preload: true,
});