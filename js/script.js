$(document).ready(function() {
  const btnBurger = $('.burger'),
    menu = $('.menu'),
    menuItem = $('.menu_item'),
    btnCloseMenu = $('.menu_close'),
    btnTabs = $('.tabs_btn'),
    reportagePrice = $('.price_reportage'),
    individualPrice = $('.price_individual'),
    btnReportage = $('.tabs_reportage'),
    btnIndividual = $('.tabs_individual'),
    aboutText = $('.about_me_text'),
    listContainer = $('.checklist__container'),
    listBtnOpen = $('.checklist__open'),
    listBtnClose = $('.checklist__close'),
    checklist = $('.checklist');


  //функции отключения и включения скролла
  function scrollOff() {
    $('html,body').css('overflow', 'hidden');
  }

  function scrollOn() {
    $('html,body').css('overflow', 'visible');
  }


  /*МЕНЮ:*/
  //открыть всплывающее меню
  btnBurger.on('click', function() {
    menu.addClass('menu_open');
    scrollOff();
  });

  //закрыть всплывающее меню
  btnCloseMenu.on('click', function() {
    menu.removeClass('menu_open');
    scrollOn();
  });

  //закрыть всплывающее меню по клику на пункт меню
  menuItem.on('click', function() {
    menu.removeClass('menu_open');
    scrollOn();
  });

  //Плавный скролл до блока по клику на пункт меню
  $(document).on("click", ".scroll-link", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 500);
  });


  /*ВКЛАДКИ:*/
  //подсветка черты под кнопкой вкладки (по клику)
  btnTabs.on('click', function() {
    btnTabs.removeClass('tabs_btn_color');
    $(this).addClass('tabs_btn_color');
  });

  //переключить на вкладку "индивидуальная"
  btnIndividual.on('click', function() {
    individualPrice.removeClass('price_hidden');
    reportagePrice.addClass('price_hidden');
  });

  //переключить на вкладку "репортажная"
  btnReportage.on('click', function() {
    reportagePrice.removeClass('price_hidden');
    individualPrice.addClass('price_hidden');
  });


  /*ЧЕК-ЛИСТ:*/
  //открыть чек-лист
  listBtnOpen.on('click', function() {
    aboutText.addClass('hidden');
    // aboutText.slideToggle('slow');
    listBtnOpen.addClass('hidden');
    checklist.removeClass('hidden');
  });

  //закрыть чек-лист
  listBtnClose.on('click', function() {
    aboutText.removeClass('hidden');
    listBtnOpen.removeClass('hidden');
    checklist.addClass('hidden');
    // checklist.slideToggle('slow');
  });

  // function diplay_hide (checklist) {
  //   if (checklist.css('display') == 'none') {
  //     listBtnOpen.on('click', function() {
  //       checklist.animate({height: 'show'}, 500);
  //     });
  //   } //else {
  //     //   $(blockId).animate({height: 'hide'}, 500);
  //     // }
  // }
});
