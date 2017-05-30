$(document).ready(function() {
  //enables to change hero's portrait background color
  $(".hero-portrait-image").click(function() {
    event.preventDefault();
    var limit = 6;
    //first pick
    if ($(".hero-portrait-image.orange").length < limit) {
      $(this).toggleClass("orange");
    } else {
      $(this).css("background-color", "grey");
    }
    //use this beneath to test out for array of adding team
    // var teamComp=[];
    // $('.hero-portrait-image.orange').each(function(){
    //     teamComp.push($(this).attr("name"));
    //
    // });
    // console.log(teamComp);
  });

  //dynamically append the map arena based by map types from btn group
  var mapType;
  $(document.body).on("click", ".click-map-select", function(event) {
    event.preventDefault();

    console.log($(this).children()[0].value);
    mapType = $(this).children()[0].value;
    $("#dropdown-map").empty();
    switch ($(this).children()[0].value) {
      case "assault":
        $("#dropdown-map").append("<li><a href='#' value='hanamura'>Hanamura</a></li>");
        $("#dropdown-map").append("<li><a href='#' value='temple-of-anubis'>Temple of Anubis</a></li>");
        $("#dropdown-map").append("<li><a href='#' value='voskaya-industries'>Voskaya Industries</a></li>");
        break;
      case "escort":
        $("#dropdown-map").append("<li><a href='#' value='dorado'>Dorado</a></li>");
        $("#dropdown-map").append("<li><a href='#' value='route-66'>Route 66</a></li>");
        $("#dropdown-map").append("<li><a href='#' value='watchpoint-gibraltar'>Watchpoint Gibraltar</a></li>");
        break;
      case "hybrid":
        $("#dropdown-map").append("<li><a href='#' value='hollywood'>Hollywood</a></li>");
        $("#dropdown-map").append("<li><a href='#' value='kings-row'>King's Row</a></li>");
        $("#dropdown-map").append("<li><a href='#' value='nubani'>Nubani</a></li>");
        $("#dropdown-map").append("<li><a href='#' value='eichenwalde'>Eichenwalde</a></li>");
        break;
      case "control":
        $("#dropdown-map").append("<li><a href='#' value='illios'>Illios</a></li>");
        $("#dropdown-map").append("<li><a href='#' value='li-jiang-tower'>Li-jiang Tower</a></li>");
        $("#dropdown-map").append("<li><a href='#' value='nepal'>Nepal</a></li>");
        $("#dropdown-map").append("<li><a href='#' value='oasis'>Oasis</a></li>");
        break;
    }
  });

  //get map value
  var mapSelect;
  $(document.body).on("click", "#dropdown-map li a", function() {
    event.preventDefault();
    $(this).parents(".btn-group").find('.selection').text($(this).text());

    //this gets the value attr when selected
    console.log($(this).attr("value"));
    mapSelect = $(this).attr("value");
  });

  //get attack/defend value
  var position;
  $(document.body).on("click", "#map-select-position .btn", function() {
    event.preventDefault();

    //this gets the value attr when selected
    console.log($(this).find("input").val());
    position = $(this).find("input").val();
  });

  //get win/lose value
  var result;
  $(document.body).on("click", "#map-select-result .btn", function() {
    event.preventDefault();

    //this gets the value attr when selected
    console.log($(this).find("input").val());
    result = $(this).find("input").val();
  });

  //The FINAL ENTRY ROUND SUBMISSION
  //needs to add the data from win/loss, atk/defend, map type, map area
  $('#entry-submit').on('click', function(event) {
    event.preventDefault();
    //gets team comp
    var teamComp = [];
    $('.hero-portrait-image.orange').each(function() {
      teamComp.push($(this).attr("name"));
    });
    console.log(teamComp);
    console.log(result);

    var userEntry = {
      teamComp: teamComp,
      result: result,
      position: position,
      mapType: mapType,
      mapSelect: mapSelect
    }
    console.log(userEntry);
    $.post("/api/entry/", userEntry).done(function(data) {
      console.log("Hello");
      console.log(data);
    });

  });
});
