// Pick Code

var heroes = ['genji', 'mccree', 'pharah', 'reaper', 'soldier-76', 'sombra', 'tracer', 'bastion', 'hanzo', 'junkrat', 'mei', 'torbjorn', 'widowmaker', 'dva', 'orisa', 'reinhardt', 'roadhog', 'winston', 'zarya', 'ana', 'lucio', 'mercy', 'symmetra', 'zenyatta'];

// connection.query('SELECT * WHERE char1 = true, char2 = true, char3 = true, char4=true, char5 = true;', 
function teamParse(char1, char2, char3, char4, char5) {

    var query = "/api/pick";
    var charArray = [];

    if (char1 != 'none') {
        query += "/" + char1;
        charArray.push(char1);
    }
    if (char2 != 'none') {
        query += "/" + char2;
        charArray.push(char2);
    }
    if (char3 != 'none') {
        query += "/" + char3;
        charArray.push(char3);
    }
    if (char4 != 'none') {
        query += "/" + char4;
        charArray.push(char4);
    }
    if (char5 != 'none') {
        query += "/" + char5;
        charArray.push(char5);
    }

    // query to Controller.  Get all matching teams.
    $.get(query, function(data) {

        var resultsArr = [];

        if (data.length > 0) {

            for (var i = 0; i < data.length; i++) {
                var currentArr = dbToArr(data[i]);
                for (var j = 0; j < currentArr.length; j++) {
                    if (currentArr[j].indexOf(charArray) === -1) {
                        resultsArr.push(currentArr[j]);
                    }
                }
                if (i === data.length - 1) {
                    heroCounter(resultsArr);
                }
            }


        } else {

            if (char5 != 'none') {
                teamParse(c1, c2, c3, c4, 'none');
            } else if (char4 != 'none') {
                teamParse(c1, c2, c3, 'none', c5);
            } else if (char3 != 'none') {
                teamParse(char1, char2, 'none', char4, char5);
            } else if (char2 != 'none') {
                teamParse(char1, 'none', char3, char4, char5);
            } else if (char1 != 'none') {
                teamParse('none', char2, char3, char4, char5);
            }

        }
    });
}

// Return array of hero names flagged true
function dbToArray(dbObj) {

    var returnArr = [];

    for (var i = 0; i < heroes.length; i++) {
        if (dbObj[heroes[i]] === true) {
            returnArr.push(heroes[i]);
        }
    }
    return returnArr;
}

// Returns the amount of time an element elem appears in array arr.
function arrCounter(arr, elem) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            counter++;
        }
    }
    return counter;
}

function heroCounter(arr) {
    // Count and Return the most common heroes
    var bestMatch;
    var highCount = 0;

    for (var i = 0; heroes.length; i++) {
        if (charArr.indexOf(heroes[i]) === -1) {
            var currentCount = arrCounter(arr, heroes[i]);
            if (currentCount > highCount) {
                highCount = currentCount;
                bestMatch = heroes[i];
            }
        }
        return bestMatch;
    }
}

// From user-entry

//enables to change hero's portrait background color
$(".hero-portrait-image").click(function() {
    event.preventDefault();
    var limit = 5;
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


});