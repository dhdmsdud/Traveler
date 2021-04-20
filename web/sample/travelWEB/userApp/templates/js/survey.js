function scrollUp(){
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop()/ vheight) - 1) * vheight)
    }, 500);
}

function scrollDown(){
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop()/ vheight) + 1) * vheight)
    }, 500);
}

$(function(){
    $('.next_btn').click(function(e){
        let divs = $(this).parents().prev().children()
        let inputs = divs.find('input:checked');
        if(inputs.length < 1) {
            alert('문항을 선택해주세요.');
            return false;
        }
        e.preventDefault();
        scrollDown();
    });


    $('.prev_btn').click(function(e){
        e.preventDefault();
        scrollUp();
    });


    $('html, body').animate({
        scrollTop: 0
    }, 500);
});


$(document).ready(function () {
        let count = 0;
        $("input[type='checkbox']").on("click", function () {
          count += 1;

          if (count > 5) {
            $(this).prop("checked", false);
            alert("5개만 선택");
          }
        });
      });
