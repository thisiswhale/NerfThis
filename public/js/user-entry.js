//
//   $(document).on("click", "#map-select", function() {
//
//       event.preventDefault();
//       $(this).addClass("active");
//       $("#reddit-btn").removeClass("active")
//       $("#youtube-btn").removeClass("active");
//   })

$(".hero-portrait-image").click(function() {
  event.preventDefault();
  var limit = 6;
  if ($(".hero-portrait-image.orange").length < limit) {
    $(this).toggleClass("orange");
  } else {
    $(this).css("background-color", "grey");
  }

});

$(document.body).on("click", ".click-map-select", function(event) {
  event.preventDefault();
  //  console.log($("#map-select > label.focus").val());
  console.log($(this).children()[0].value);
  $("#dropdown-map").empty();
  switch ($(this).children()[0].value) {
    case "assault":
      $("#dropdown-map").append("<li><a href='#' value='hanamura'>hanamura</a></li>");
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
