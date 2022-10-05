'use strict'

lightGallery(document.getElementById('light_gallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    thumbnail: true,
    preload: true,
});