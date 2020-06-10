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
    $('.header').on('click', '.login-button', function (event) {
        event.preventDefault();
        $('#login-modal').fadeIn();
    });

    $('.modal__window').on('click', '.modal__close', function () {
        $('#login-modal').fadeOut();
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmVsb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImxpYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvL01vYmlsZSBtZW51XHJcbiAgICAkKCcubW9iaWxlLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubmF2aWdhdGlvbicpLnNsaWRlVG9nZ2xlKDQwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS5vdXRlcldpZHRoKCk7XHJcbiAgICAgICAgaWYod2luZG93V2lkdGggPiA3NjgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmlnYXRpb24nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNsaWRlclxyXG4gICAgdmFyIG15U3dpcGVyID0gbmV3IFN3aXBlciAoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTW9kYWxcclxuICAgICQoJy5oZWFkZXInKS5vbignY2xpY2snLCAnLmxvZ2luLWJ1dHRvbicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnI2xvZ2luLW1vZGFsJykuZmFkZUluKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubW9kYWxfX3dpbmRvdycpLm9uKCdjbGljaycsICcubW9kYWxfX2Nsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNsb2dpbi1tb2RhbCcpLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuIl19
