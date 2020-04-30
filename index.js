


var str = "Hi! I'm Shardul, a programmer.";


var spans = '<span>' + str.split('').join('</span><span>') + '</span>'+'<span id="cursor">|</span>';

$(spans).hide().appendTo('.title').each(function (i) {
    $(this).delay(60 * i).css({
        display: 'inline',
        opacity:0
    }).animate({
        opacity:1
    }, 60);

});

setInterval(function() {
  $('#cursor').animate({
    opacity: 1
  }, 500).animate({
    opacity: 0
  }, 500)
}, 400);
