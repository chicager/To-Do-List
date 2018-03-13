$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function (event) {
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
            $('ul').prepend('<li><span><i class="fa fa-trash"></i></span>' + todoText + '</li>');
        }
    }
});

$('h1').on('click', '.fa-plus', function (event) {
   $('input[type="text"]').fadeToggle(250);
});

