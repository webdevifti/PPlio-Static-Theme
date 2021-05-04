// Hire Pupop Show
$(document).on('click','.btn-hire', function(){
    $('.hire-popup').addClass('hire-popup-active');
});
// Hire Popup Hide
$(document).on('click','.form-cancel', function(){
    $('.hire-popup').removeClass('hire-popup-active');
});


$(window).on('load', function () {

  var $projects = $('#isotope-container');

  $projects.isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
  });


  //filter items on button click
  $('#isotope-filter').on('click', 'button', function () {

      //get filter value
      var rafi = $(this).attr('data-filter');

      //filter protfolio
      $projects.isotope({
          filter: rafi,
      });

      //active button
      $('#isotope-filter').find('.active').removeClass('active');
      $(this).addClass('active');

  });
});



// Slick Slider For Testimonial Section
$('.testimonial-slider').slick({
    autoplay: true,
    slidesToShow: 2,
    slideToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
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
    ]
});