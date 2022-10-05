$(document).ready(function () {

    // моб меню
    $('.burger').on('click', function() {
        $('.mobile-menu').toggleClass('open');
        if($('.mobile-menu').hasClass('open')) {
            $('.burger').addClass('open');
        }
        else {
            $('.burger').removeClass('open');
        }
    });



    // Фикс Хедер
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            if (!$('.header').hasClass('fixed_nav')) {
                $('.header').addClass('fixed_nav');
            }
        } else {
            if ($('.header').hasClass('fixed_nav')) {
                $('.header').removeClass('fixed_nav');
            }
        }
    });
    // animation
    AOS.init();
});


// Плавный скрол
$('.anchor').on('click', function (e) {
    e.preventDefault();
    const top = $($(this).attr('href')).offset().top;
    $('html, body').animate({ scrollTop: top + 'px' }, 900);
});
// Slick Slider
$(function () {
    $('.news__list').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    })
})

// СЛАЙДЕР Верхней секции
$("#slider").lightSlider({
    item: 1,
    auto: true,
    speed: 1500,
    pause: 3000,
    enableTouch: false,
    loop: true,
    vertical: true,
    verticalHeight: 800,
    vThumbWidth: 50,
    thumbItem: 8,
    thumbMargin: 4,
    slideMargin: 0,
    controls: false,
});


$("#get_form").on('submit', function(e){
    let UserName = $(".inp_name").val();
    let UserEmail = $(".inp_mail").val();
    if (UserName == '') {
        alert('Enter Name');
        return false;
    }
    if (UserEmail == ''){
        alert('Enter Email')
        return false;
    }
});

// -------------------------------------------------------
// Btn see more
$('.see-more').on('click', (e)=>{
    $('.extra__image').toggleClass('show');
    if (!$('.extra__image').hasClass('show')) {
        $('.see-more').text('See more');
        const top = $('.light__gallery--main').offset().top;
        $('html, body').animate({ scrollTop: top - 100 + 'px' }, 300);
    } else {
        $('.see-more').text('Hide');
    }
});

$('.info__btn').on('click', (e)=>{
    $('.info__extra-text').toggleClass('show');
    if (!$('.info__extra-text').hasClass('show')) {
        $('.info__btn').text('more details');
    } else {
        $('.info__btn').text('Hide');
    }
});