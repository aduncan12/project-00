var mainDivs = $('main').children()

var zFlyers = [];
for(i = 0; i < mainDivs.length; i++) {
    zFlyers[i] = $(mainDivs[i]).css("z-index");
}

// button links to flyers 
$('#about').on('click', function() {
    $('.about').css("z-index", zFlyers.length++);
});

$('#aboutNav').on('click', function() {
    $('.about').css("z-index", zFlyers.length++);
});

$('#projects').on('click', function() {
    $('.projects').css("z-index", zFlyers.length++);
});

$('#projectsNav').on('click', function() {
    $('.projects').css("z-index", zFlyers.length++);
});

$('#testimonials').on('click', function() {
    $('.testimonials').css("z-index", zFlyers.length++);
});

$('#testimonialsNav').on('click', function() {
    $('.testimonials').css("z-index", zFlyers.length++);
});

$('#contact').on('click', function() {
    $('.contact').css("z-index", zFlyers.length++);
});

$('#contactNav').on('click', function() {
    $('.contact').css("z-index", zFlyers.length++);
});
// button links to flyers 

// testimonials 
setInterval(function() {
    $('#test1').fadeIn(3500).fadeOut(3500, function () {
        $('#test2').fadeIn(3500).fadeOut(3500, function () {
             $('#test3').fadeIn(3500).fadeOut(3500)            
        })
    })
}, 21000);
// testimonials