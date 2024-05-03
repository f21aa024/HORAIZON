//scroll_img
window.onscroll = () => {
  
  scroll_position = window.pageYOffset;
  output.innerHTML = scroll_position;

  var windowWidth = $(window).width();
  if (scroll_position < 1 ) {   
  $(".header_logo").css('opacity', '1')
    $('.header_logo').css('transition', '0.2s')
  
  }
  if (scroll_position > 1 ) {   
    $(".header_logo").css('opacity', '0')
    $('.header_logo').css('transition', '0.2s')
  }
  if (scroll_position <  2200) {   
    
    $(".service_img").css('opacity', '0')
      $('.service_img').css('transition', '2s')
    }
    if (scroll_position > 2200 ) {   
      $(".service_img").css('opacity', '1')
    $('.service_img').css('transition', '2s')
    }
 
  }  
