
jQuery(document).ready(function(){
  // FACE REEL 
  let leftFaceReelOptions = {
  vertical: true,
  verticalSwiping: true,
  // centerMode: true,
  infinite: true,
  slidesToShow: 4,
  autoplay:true,
  autoplaySpeed: 3,
  speed: 10000,
  cssEase: 'linear',
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false

  }
  let rightFaceReelOptions = {
    vertical: true,
    verticalSwiping: true,
    // centerMode: true,
    infinite: true,
    slidesToShow: 4,
    autoplay:true,
    autoplaySpeed: 2,
    speed: 8000,
      cssEase: 'linear',
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,

  }

  let newExp1={
     autoplay: true,
     centerMode: true,
     centerPadding: "40px",
     autoplaySpeed: 5000,
     dots: true,
     infinite: true,
     initialSlide: 2,
     slidesToShow: 1,
     slidesToScroll: 1,
     variableWidth: true,
     variableHeight: true,
     prevArrow:"<img class='slick-prev' src='img/leftArrow.svg'>",
     nextArrow:"<img class='slick-next' src='img/rightArrow.svg'>"
  }

  let newExp = {

  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='https://cdn2.iconfinder.com/data/icons/harmony-ui-part-1-1/62/circle-up-128.png'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='https://cdn2.iconfinder.com/data/icons/harmony-ui-part-1-1/62/circle-up-128.png'>"
  
}
  // PROFILES

  $('.slick-left-faceReel').slick(leftFaceReelOptions);
  $('.slick-right-faceReel').slick(rightFaceReelOptions);
  $('.slick-profiles').slick(newExp1);

});