$(document).ready(function(){

    // ons scroll make header fixed
    function scrollfn(){
        if($(window).scrollTop() > 0){
            $("header").addClass("fixed");
        }
        else{
            $("header").removeClass("fixed");
        }
    }
    scrollfn();
    $(window).scroll(function(){
        scrollfn();
    });

    // materialize tabs
    $('.tabs').tabs();

    // owl carousel for #participants and #judge
    $('#participants .owl-carousel, #judge .owl-carousel').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots: false,
        navText: ["<img src='assets/img/arrow.svg'>","<img src='assets/img/arrow.svg' style='transform: rotate(180deg)'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1140:{
                items:6
            }
        }
    });

    // footer scroll top function
    $('.scroll-top').each(function(){
        $(this).click(function(){ 
            $('html').animate({ scrollTop: 0 }, 'slow'); return true; 
        });
    });

    // search block visible
    $('.search').on("click",function(){
        $('.search, .search-content').toggleClass('active');
    });

    // responsive menu click function
    $('.burger-bar').on('click', function(){
        $('.responsive-menu').addClass('active');
    });
    $('.close-resp-menu').on('click', function(){
        $('.responsive-menu').removeClass('active');
    });

    // gallery images slider
    var lightbox = $('.gallery-image').simpleLightbox();

    // checked site rules
    $('.accept-and-go input').click(function() {
        if ($(this).is(':checked')) {
            $('.site-rules').removeClass('active');
        }
    });

    // materialize select
    $('select').material_select();
});