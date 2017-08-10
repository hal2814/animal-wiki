$(document).ready(function(){
  $("#clickWart").click(function(){
      $(".wartInfo").show();
      $("#lion").hide();
      $("#sugarGlider").hide();
  });

  $(".wartInfo").click(function(){
      $(".wartInfo").hide();
      $("#lion").show();
      $("#sugarGlider").show();
  });

  $("#clickLion").click(function(){
    $(".lionInfo").show();
    $("#warthog").hide();
    $("#sugarGlider").hide();
  });

  $(".lionInfo").click(function(){
    $(".lionInfo").hide();
    $("#warthog").show();
    $("#sugarGlider").show();
  });

  $("#clickSugar").click(function(){
    $(".sugarInfo").show();
    $("#lion").hide();
    $("#warthog").hide();
  });

  $(".sugarInfo").click(function(){
    $(".sugarInfo").hide();
    $("#lion").show();
    $("#warthog").show();
  });
});
