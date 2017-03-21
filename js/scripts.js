$(function(){
  $("#Intro .clickable").click(function(){
    $("#initially_hidden1, #MoreInfo").slideToggle();
    $("#MoreInfo .clickable").click(function(){
      $("#initially_hidden2").fadeToggle();
    });
  });

  $(".btn").click(function(){
    $(".side-bar-button .btn").toggleClass("btn-initial");
    $("body").toggleClass("inverted");
    $(".side-bar-button .btn").toggleClass("btn-inverted");

  });

});
