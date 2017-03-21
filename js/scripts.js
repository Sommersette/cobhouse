$(function(){
  $("#Intro .clickable").click(function(){
    $("#initially_hidden1, #MoreInfo").slideToggle();
    $("#MoreInfo .clickable").click(function(){
      $("#initially_hidden2").fadeToggle();
    });
  });


});
