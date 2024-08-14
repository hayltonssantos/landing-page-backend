$(document).ready(function(){
  
    $(".nav-bar").on("click", function(){
      $(".menu-lateral").toggleClass("active");
      $(".nav-bar i").toggleClass("fa-xmark fa-bars fa-bounce");
   });

    $('.videos .itens').slick({
    dots: true,
    infinite: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 

  $('a').on('click', function(){
    if($(this).is('[href]')){
      var link = $(this).attr('href');

      if(link.indexOf('#') > -1){
       event.preventDefault();
       $(".menu-lateral").removeClass("active");
       $(".nav-bar i.fa-xmark").toggleClass("fa-xmark fa-bars fa-bounce");
        $('html , body').animate({scrollTop: $(link).offset().top -50},1500)
      }
    }
  })

});