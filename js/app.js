(function ($) {

    var images = ['http://192.168.43.135/956%20media/images/media5.jpeg', 'http://192.168.43.135/956%20media/images/media2.jpeg', 'http://192.168.43.135/956%20media/images/media4.jpeg']
    $(document).ready(function () {
        setInterval(() => {
            var image = $("#home").css("background-image");
            image = image.substr(5, image.length - 7);
            next_image = images[(images.indexOf(image) + 1) % images.length];
            $("#home").css("background-image", "url('" + next_image + "')");
        }, 2500);
    });
})(jQuery);