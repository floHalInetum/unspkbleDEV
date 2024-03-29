/* FUNCTION TO CROSSFADE BETWEEN IMAGES
visite https://www.simonbattersby.com/blog/simple-jquery-image-crossfade/
-----------------------------------------------------------------------*/
/*function cycleImages(){
  const $active = $('#cycler .active');
  const $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
  $next.css('z-index',2);//move the next image up the pile
  $active.fadeOut(800,function(){//fade out the top image
    $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
    $next.css('z-index',3).addClass('active');//make the next image the top one
  });
}*/

// START JQUERY CODE AFTER PAGE IS LOADED
$(document).ready(function () {
  /* SMOOTH SCROLLING WITH JQUERY 
  visit https://css-tricks.com/snippets/jquery/smooth-scrolling/
  ----------------------------------------------------------- */
  // Select all links with hashes
  $('a[href*="#"]').click(function (event) {
    // Figure out element to scroll to
    const $target = $(this.hash);
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $target.offset().top
    }, 800, function () {
      // Callback after animation
      // Must change focus?!
    });
  });

  //https://kenwheeler.github.io/slick/ DIAPORAMA !
  $('.diapo').slick({
    dots: true,
    //infinite: true,
    rtl: true,
    //speed: 300,
    //fade: true,
    //cssEase: 'ease'
  });

  /* check if user scroll and show/hide
  nav-bar and icons (menu and arrow)
  ------------------------------------*/
  $(document).scroll(function () {
    // get position of the bio section
    const posBio = $('#bio').offset().top;
    // get position on the page
    const pos = $(document).scrollTop();
    if (pos < posBio) {
      $('nav').slideDown(500);
      $('.menu').slideUp(250);
      $('.arrow').slideUp(500);
    } else {
      $('.arrow').show();
      $('.menu').show();
      $('nav').slideUp(500);
    }
  });

  /* show nav-bar if icon-menu is clicked
  -------------------------------------*/
  $('.menu').click(function () {
    $('nav').slideDown(500);
    $('.menu').slideUp(250);
  });

  /* Change about section image every 5s
  -------------------------------------*/
  //setInterval('cycleImages()', 5000);
});


