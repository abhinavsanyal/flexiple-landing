jQuery(document).ready(function(){
$('.step__icon--1').click(function(){
    $('.step__icon--1').css('background-image', "url('/img/stepsIcons/step1.png')");
    $('.step__icon--2').css('background-image', "url('/img/stepsIcons/step2.png')");
    $('.step__icon--3').css('background-image', "url('/img/stepsIcons/step3.png')");
    $('.step__icon--4').css('background-image', "url('/img/stepsIcons/step4.png')");

    $('.i1').css('display', "block");
    $('.i2').css('display', "none");
    $('.i3').css('display', "none");
    $('.i4').css('display', "none");

    // alert("i1 was clicked.");
});
$('.step__icon--2').click(function(){
    $('.step__icon--1').css('background-image', "url('/img/stepsIcons/s1.png')");
    $('.step__icon--2').css('background-image', "url('/img/stepsIcons/s2.png')");
    $('.step__icon--3').css('background-image', "url('/img/stepsIcons/step3.png')");
    $('.step__icon--4').css('background-image', "url('/img/stepsIcons/step4.png')");

    $('.i1').css('display', "none");
    $('.i2').css('display', "block");
    $('.i3').css('display', "none");
    $('.i4').css('display', "none");
    // alert("i2 was clicked.");
  });
$('.step__icon--3').click(function(){
    $('.step__icon--1').css('background-image', "url('/img/stepsIcons/s1.png')");
    $('.step__icon--2').css('background-image', "url('/img/stepsIcons/step2.png')");
    $('.step__icon--3').css('background-image', "url('/img/stepsIcons/s3.png')");
    $('.step__icon--4').css('background-image', "url('/img/stepsIcons/step4.png')");

    $('.i1').css('display', "none");
    $('.i2').css('display', "none");
    $('.i3').css('display', "block");
    $('.i4').css('display', "none");
  });
$('.step__icon--4').click(function(){
    $('.step__icon--1').css('background-image', "url('/img/stepsIcons/s1.png')");
    $('.step__icon--2').css('background-image', "url('/img/stepsIcons/step2.png')");
    $('.step__icon--3').css('background-image', "url('/img/stepsIcons/step3.png')");
    $('.step__icon--4').css('background-image', "url('/img/stepsIcons/s4.png')");

    $('.i1').css('display', "none");
    $('.i2').css('display', "none");
    $('.i3').css('display', "none");
    $('.i4').css('display', "block");
  });
});
