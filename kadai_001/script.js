$(function () {

    // カルーセル
    $('.main').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true
    });
  
    // リンクのホバーエフェクト
    $('a').hover(
        function() {
            $(this).animate({'opacity': 0.6}, 500); 
        },
        function() {
            $(this).animate({'opacity': 1}, 500);
        }
    );
  
    // スムーススクロール
    $('a[href^="#"]').click(function() {
        var adjust = 0;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href === "#" || href === "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop: position}, speed, 'swing');
        return false;
    });
  
    // ページトップボタンの表示・非表示
    var pagetop = $('.top');
    pagetop.hide();
  
    $(window).on('scroll', function() {
        // ページトップボタンの表示制御
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
  
        // スクロールによるfadeInクラスの付与
        var wHeight = $(window).height();
        var wScroll = $(window).scrollTop();
      
        // 共通のスクロール処理
        $('.scroll-fadeIn').each(function() {
            var elementTop = $(this).offset().top;
            if (wScroll > elementTop - wHeight + 200) {
                $(this).addClass('fadeIn');
            }
        });
    });
  
      // Worksの画像をクリックしたときにモーダルで拡大表示する
      $('.item img').click(function () {
          const imgSrc = $(this).attr('src');
          const imgAlt = $(this).attr('alt');
          $('.bigimg').attr({
              src: imgSrc,
              alt: imgAlt,
          });
          $('.modal').fadeIn();
          });
      
          // 閉じるボタンをクリックしたときにモーダルを閉じる
          $('.close-btn').click(function () {
          $('.modal').fadeOut();
          });
  
  });
  
    