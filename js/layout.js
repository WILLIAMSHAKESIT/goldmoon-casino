var typed2 = new Typed('#typed2', {
    strings: ['<span>시규가입 첫 입금 이벤트</span><p>10만 입금 시 3만 지급<br>20만 입금 시 5만 지급</p>', '<span>매일 첫 입금 이벤트</span><p>평일 3% 최대 10만원 / 주말 5% 최대10만원</p>', '<span>주가 올인 이벤트</span><p>월~일요일 손실금에 5%최대100만원 지급! <br> 라이브 카지노만 적용</p>'],
    typeSpeed: 40,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
$(document).ready(function(){
    $('.center-body .left, .center-body .right, .notice-items, .event-items').easyTicker({
        direction: 'up',
        easing: 'swing',
        speed: 'slow',
        interval: 1000,
        height: 'auto',
        visible: 0,
        mousePause: true,
        autoplay: true,
        controls: {
            up: '',
            down: '',
            toggle: '',
            playText: 'Play',
            stopText: 'Stop'
        },
        callbacks: {
            before: false,
            after: false,
            finish: false
        }
    });
    $('.game-card').mouseover(function(){
        $(this).siblings('.game-card').addClass('off')
    })
    $('.game-card').mouseout(function(){
        $(this).siblings('.game-card').removeClass('off')
    })
    $('.title-wrapper .btn').click(function(){
        let val = $(this).data('val')
       
        $(this).addClass('btn-primary')
        $(this).removeClass('btn-outline-primary')
        $(this).siblings('.btn').removeClass('btn-primary')
        $(this).siblings('.btn').addClass('btn-outline-primary')
        
        if(val === 'casino'){
            $('.game-wrapper .casino').removeClass('off')
            $('.game-wrapper .slot').addClass('off')
            $('#titleTab').html('<i class="fa-solid fa-diamond"></i>라이브 카지노')
        }else{
            $('.game-wrapper .slot').removeClass('off')
            $('.game-wrapper .casino').addClass('off')
            $('#titleTab').html('<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#bd9b46" d="m5 12l2-4V7H4v1h2l-2 4m5 0l2-4V7H8v1h2l-2 4m5 0l2-4V7h-3v1h2l-2 4m9-10c-1.1 0-2 .9-2 2c0 .7.4 1.4 1 1.7V17h-3v-2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-3.8c-.8-1.2-2.2-2-3.7-2s-2.9.8-3.7 2H2c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1v7h15v-3h3c1.1 0 2-.9 2-2V5.7c.6-.3 1-1 1-1.7c0-1.1-.9-2-2-2m-8 17H6v-2h7v2m3-6H3V6h13v7Z"></path></svg>슬롯')
        }
    })
    
    $('.board-center .tabs .tab-item').click(function(){
        let val = $(this).data('tab')
       
        $(this).addClass('active')
        $(this).siblings('.tab-item').removeClass('active')
        
        if(val === 'withdraw'){
            $('.center-body .withdraw').removeClass('off')
            $('.center-body .deposit').addClass('off')
        }else{
            $('.center-body .deposit').removeClass('off')
            $('.center-body .withdraw').addClass('off')
        }
    })

    $(window).scroll(function () {
        console.log($(this).scrollTop())
        100 < $(this).scrollTop() ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
      
        if ($(window).width() < 1280) {
            if ($(this).scrollTop() > 100) {
                $('.new-logo').css('width', '145px');
            } else {
                $('.new-logo').css('width', '160px');
            }
        } else {
            if ($(this).scrollTop() > 100) {
                $('.new-logo').css('width', '210px');
            } else {
                $('.new-logo').css('width', '240');
            }
        }
    }),
    $(".scroll-top").on("click", function () {
        return (
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                600
            ),
            !1
        );
    }),
    $(".scroll-top").on("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});