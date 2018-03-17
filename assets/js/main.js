var x = {};

$('ul').on('click', 'li', function () {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        if (x !== this) {
            x = this;
            return;
            
        } else {
            $(this).toggleClass('completed');
            return;
        }
    }

    $(this).toggleClass('completed');

});

$('ul').on('click', 'div', function (event) {
    $(this).parent().fadeOut(250, function () {
        $(this).remove();
    });
    //prevent event bubbling
    event.stopPropagation();
});

$('input[type="text"]').on('keypress', function (event) {
    if (event.which === 13) {
        if ($(this).val() !== '') {
            var todoText = $(this).val();
            $(this).val('');
            $('ul').prepend('<li><div class="icon-container"><i class="fa fa-trash"></i></div><p>' +
                todoText + '</p></li>');
        }
    }
});

$('h1').on('click', '.fa-plus', function (event) {
    $('input[type="text"]').fadeToggle(250, function () {
        $(this).focus();
    });
});