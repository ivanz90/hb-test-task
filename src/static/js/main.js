// import { isPattern } from "babel-types";

// short function for console.log

let cl = (x) => {
  console.log(x);
} 

$(function() {

  // slider

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items:1,
    loop:true,
    margin: 0,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
  });

  // validation

  $('.form').on('submit', function() {
    event.preventDefault();
    validateForm(this);
  });

  function validateForm(f) {
    
    let name = $('.form__name'),
        email = $('.form__email'),
        phone = $('.form__phone'),
        emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        phonePattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
        isValid = false;
       

    let validateField = (e, reg = /(?:)/) => {

      let checkValid;
      
      if (reg.test(e.val()) && e.val() !== '') {
        e.removeClass('form__input--error');
        e.siblings('.form__error').hide();
        checkValid = true;
      } else {
        e.addClass('form__input--error');
        e.siblings('.form__error').show();
        checkValid = false;
      }
      
      return checkValid;
    }
    
    if (validateField(name) & validateField(email, emailPattern) & validateField(phone, phonePattern)) {
      isValid = true;
      $('.modal').fadeIn(500);
      $('body').css('overflow', 'hidden');
      setTimeout('$(".modal").hide();', 4000);
    } else {
      isValid = false;
    }
    
    return isValid;
  }

  $('.modal__close').on('click', function () {
    event.preventDefault();
    $('.modal').fadeOut(500);
    $('body').css('overflow', 'visible');
  });

  $('.form__phone').mask('+7(000)000-00-00');

  // mobile menu

  $('.burger').on('click', function() {
    $(this).toggleClass('change');
    $('.main-menu').toggleClass('main-menu--state--active');
  })

  // menu point highlight while scrolling

  let sectinos = $('section');

  $(window).scroll(function() { 
    sectinos.each(function(i, el) {
      let top = $(el).offset().top-100;
      let bottom = top+$(el).height();
      let scroll = $(window).scrollTop();
      let id = $(el).attr('id');
      if (scroll > top && scroll < bottom) {
        $('li.main-menu__item').removeClass('main-menu__item--active');
        $('a[href="#'+id+'"]').parent().addClass('main-menu__item--active');
      }
    })
  });
  // scrolling 

  $('a[href^="#"]').click(function(){
    
    event.preventDefault();

    let target = $(this).attr('href');
    
		$('html, body').animate({scrollTop:$(target).offset().top},800);

  });

});