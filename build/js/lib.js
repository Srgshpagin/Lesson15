$(document).ready(function () {

    //Mobile menu
    $('.mobile-button').on('click', function () {
        $('.navigation').slideToggle(400);
    });

    $(window).on('resize', function () {
        const windowWidth = $(window).outerWidth();
        if(windowWidth > 768) {
            $('.navigation').removeAttr('style');
        }
    });

    // Slider
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
        },
    });

    // Modal
    $('.header').on('click', '.login-button', function () {
        $('#login-modal').fadeIn();
    });

    $('.modal__window').on('click', '.modal__close', function () {
        $('#login-modal').fadeOut();
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmVsb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsaWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy9Nb2JpbGUgbWVudVxyXG4gICAgJCgnLm1vYmlsZS1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLm5hdmlnYXRpb24nKS5zbGlkZVRvZ2dsZSg0MDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgIGlmKHdpbmRvd1dpZHRoID4gNzY4KSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZpZ2F0aW9uJykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTbGlkZXJcclxuICAgIHZhciBteVN3aXBlciA9IG5ldyBTd2lwZXIgKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE1vZGFsXHJcbiAgICAkKCcuaGVhZGVyJykub24oJ2NsaWNrJywgJy5sb2dpbi1idXR0b24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnI2xvZ2luLW1vZGFsJykuZmFkZUluKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubW9kYWxfX3dpbmRvdycpLm9uKCdjbGljaycsICcubW9kYWxfX2Nsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNsb2dpbi1tb2RhbCcpLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuIl19
