var main = function () {

    // *************************************************** Menu Button Active
    $('.menuButton').addClass('active');
    $('.menuClose').removeClass('active');

    // *************************************************** Clicking on Menu Button
    $('.menuButton').click(function () {

        isMenuOpen = true;
        // *************************************************** Menu Button Active
        $('.menuButton').removeClass('active');
        $('.menuClose').addClass('active');

        // *************************************************** Shifting Menu & Body
        $('body').animate({
            left: "285px"
        }, 300);
        $('.menu').animate({
            left: "0px"
        }, 300);

        // *************************************************** Animating (Rotating) Menu Button
        //        http://jsfiddle.net/LTNPs/
        $('.menuButton').animate({
            borderSpacing: 360
        }, {
            step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: 'slow'
        }, 'easein');

    });

    // *************************************************** Clicking Menu Close 
    $('.menuClose').click(function () {

        isMenuOpen = false;
        // *********************************************Menu Button Active
        $('.menuButton').addClass('active');
        $('.menuClose').removeClass('active');

        // *************************************************** Animating menu Button
        $('.menuButton').animate({
            borderSpacing: 0
        }, {
            step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: 'slow'
        }, 'linear');

        // *************************************************** Shifting Body & Menu
        $('body').animate({
            left: "0px"
        }, 300);
        $('.menu').animate({
            left: "-285px"
        }, 300);


    });

    // *************************************************** clicking on link
    $('.menu a').click(function (e) {
        redirect = $(this).attr('href');
        e.preventDefault();
        
        $('body').animate({
            left: "0px"
        }, 400);
        $('.menu').animate({
            left: "-285px"
        }, 400);
        
        $('#splashText').hide().fadeOut(300);
        $('.hiddenText').hide().fadeOut(300);
        
        
        $('body').fadeOut(400, function () {
            document.location.href = redirect
        });
    });


};


$(document).ready(function () {

    $("body").css("display", "none");
    $("body").fadeIn(400);

    main();
});