$(function() {
   $('.menu_area').on('click', function() {
       $('.langGroup, .gnb').slideToggle()
       $('.menu_area > img').attr({
        src: "img/menu_b.png"
       })     
   });
})
$(function() {
   let language = $('.language > a')
   let language_sub = $('.search_language > a')
   let langList = $('.lang_list')
   let langList_sub = $('.search_lang_list')
   let header = $('.header');

/* header */
$(header).on('mouseover', function() {
    $(this).toggleClass('on')
});

/* language */
language.on('click', function() {
    langList.toggle();
});

$('.language > a').on('click', function() {
    $('.language > a > img').toggleClass('on')
});

$(header).on('mouseover', function() {
    $(this).addClass('on');    
    $('.language > a >img').attr({
            src: "img/icon/down_b.png"
    })
}).on('mouseleave', function() {
    $(this).removeClass('on');
    $('.language > a >img').attr({
        src: "img/icon/down_w.png"
})
});

/* search_language */
language_sub.on('click', function() {
langList_sub.toggle();
});

$('.language_sub > a').on('click', function() {
    $('.language_sub > a > img').toggleClass('on')
});

$(header).on('mouseover', function() {
    $(this).addClass('on');    
    $('.language_sub > a >img').attr({
            src: "img/icon/down_b.png"
    })
}).on('mouseleave', function() {
    $(this).removeClass('on');
    $('.language_sub > a >img').attr({
        src: "img/icon/down_w.png"
})
});


/* logo */
$(header).on('mouseover', function() {
    $(this).addClass('on');    
    $('.logo > a >img').attr({
            src: "img/logo_o.png"
    })
}).on('mouseleave', function() {
    $(this).removeClass('on');
    $('.logo img').attr({
        src: "img/logo_w.png"
})
});

/* misc_link border */
$(header).on('mouseover', function() {
    $('.header .topHeader .misc_link > a').addClass('on')
})
$(header).on('mouseleave', function() {
    $('.header .topHeader .misc_link > a').removeClass('on')
})
$(header).on('mouseover', function() {
    $('.header .topHeader .misc_link .search_btn').addClass('on')
})
$(header).on('mouseleave', function() {
    $('.header .topHeader .misc_link .search_btn').removeClass('on')
});

$(header).on('mouseover', function() {
    $(this).addClass('on');    
    $('.search_btn > img').attr({
            src: "img/icon/search_b.png"
    })
}).on('mouseleave', function() {
    $(this).removeClass('on');
    $('.search_btn > img').attr({
        src: "img/icon/search_w.png"
})
});

/* sub1 */
$('#depth1').on('mouseover', function() {
    $('.gnb_sub1').addClass('on');
});
$('#depth1').on('mouseleave', function() {
    $('.gnb_sub1').removeClass('on');
});

$('.gnb_sub1').on('mouseover', function() {
    $('.gnb_sub1').addClass('on');
});
$('.gnb_sub1').on('mouseleave', function() {
    $('.gnb_sub1').removeClass('on');
});
/* sub2 */
$('#depth2').on('mouseover', function() {
    $('.gnb_sub2').addClass('on');
});
$('#depth2').on('mouseleave', function() {
    $('.gnb_sub2').removeClass('on');
});

$('.gnb_sub2').on('mouseover', function() {
    $('.gnb_sub2').addClass('on');
});
$('.gnb_sub2').on('mouseleave', function() {
    $('.gnb_sub2').removeClass('on');
});
/* sub3 */
$('#depth3').on('mouseover', function() {
    $('.gnb_sub3').addClass('on');
});
$('#depth3').on('mouseleave', function() {
    $('.gnb_sub3').removeClass('on');
});

$('.gnb_sub3').on('mouseover', function() {
    $('.gnb_sub3').addClass('on');
});
$('.gnb_sub3').on('mouseleave', function() {
    $('.gnb_sub3').removeClass('on');
});
/* sub4 */
$('#depth4').on('mouseover', function() {
    $('.gnb_sub4').addClass('on');
});
$('#depth4').on('mouseleave', function() {
    $('.gnb_sub4').removeClass('on');
});

$('.gnb_sub4').on('mouseover', function() {
    $('.gnb_sub4').addClass('on');
});
$('.gnb_sub4').on('mouseleave', function() {
    $('.gnb_sub4').removeClass('on');
});
});

/* search */
$(function() {
    $('.header > .topHeader > .misc_link > .search_btn').on('click', function() {
        $('.search').slideToggle()  
    });
    $('.search_close').on('click', function() {
        $('.search').slideToggle()  
    });
})

/* swiper */
$(function() {
    var swiper = new Swiper(".mainBanner", {
            loop : true,
            autoplay : {
            delay : 5000,
            disableOnInteraction : false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            
        });

        var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 25,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper = new Swiper(".snsSwiper", {
      slidesPerView: 5,
      centeredSlides: false,
      spaceBetween: 25,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1, 
    spaceBetween: 10,
    breakpoints: {
    600: { 
    slidesPerView: 1, },
    610: { slidesPerView: 3, }
    }});

    var swiper = new Swiper('.snsSwiper', {
    slidesPerView: 3, 
    spaceBetween: 20,
    breakpoints: {
    600: { slidesPerView: 1.5, }
    }
    });
})

$(function() {
    $('.menu').on('click', function() {
       $('.menu_list').addClass('on')
    })
    $('.ico_close').on('click', function() {
       $('.menu_list').removeClass('on')
    })
  });