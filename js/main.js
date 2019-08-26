
$(document).ready(function(){
    $('.slider__laptop').slick({
});
    $('.close__btn').click(function () {
        $('.popup').removeClass('open')
    });
    $('.open-popup').click(function () {
        $('.popup').addClass('open')
    })
    $(".burger").click(function () {
        $(".mobile__menu").addClass('show');
    });
    $(".mobile__menu-close, .mobile__menu-item").click(function () {
        $(".mobile__menu").removeClass('show');
    });
});
$(document).ready(function(){
    lazyload();
});
$(window).scroll(function(){
    lazyload();
})
function lazyload(){
    $('[data-counter]').each(function(){
        if(isScrolledIntoView($(this))){
            if (!$(this).hasClass('scroll')){
                counter(this.getAttribute('data-counter'), this);
            }
        }
    });
}
function isScrolledIntoView(elem){
    let $elem = $(elem);
    let $window = $(window);
    let docViewTop = $window.scrollTop();
    let docViewBottom = docViewTop + $window.height();
    let elemTop = $elem.offset().top;
    let elemBottom = elemTop + $elem.height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
function counter(data,element) {
    let start = 0;
    let finish= data;
    let timeout;
    if (data>100){
        timeout = 10;
    }
    else{
        timeout=60;
    }
    $(element).addClass('scroll');
    let count = setInterval(function (l) {
        start++;
        $(element).html(start);
        console.log(start);
        if (start==finish){
            clearInterval(count);
        }
    }, timeout)
}

// $(document).ready(function() {
//
//     //E-mail Ajax Send
//     $("form").submit(function() { //Change
//         var th = $(this);
//         $.ajax({
//             type: "POST",
//             url: "mail.php", //Change
//             data: th.serialize()
//         }).done(function() {
//             // alert("Thank you!");
//             setTimeout(function() {
//                 // Done Functions
//                 th.trigger("reset");
//             }, 1000);
//         });
//         return false;
//     });
//
// });

$(document).ready(function(){
    $(".menu, .mobile__menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});