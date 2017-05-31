$(document).ready(function() {

    // Pick Code

    var heroes = ['Genji', 'McCree', 'Pharah', 'Reaper', 'Soldier76', 'Sombra', 'Tracer', 'Bastion', 'Hanzo', 'Junkrat', 'Mei', 'Torbjorn', 'Widowmaker', 'DVa', 'Orisa', 'Reinhardt', 'Roadhog', 'Winston', 'Zarya', 'Ana', 'Lucio', 'Mercy', 'Symmetra', 'Zenyatta'];
    var charArray = [];
    // connection.query('SELECT * WHERE char1 = true, char2 = true, char3 = true, char4=true, char5 = true;', 
    function teamParse(char1, char2, char3, char4, char5) {
        // console.log("teamParse initiated with " + char1 + " " + char2 + " " + char3 + " " + char4 + " " + char5);
        var query = "/api/pick";
        charArray = [];

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
            // console.log("data in pick js " + data);
            var resultsArr = [];

            if (data.length > 0) {

                for (var i = 0; i <= data.length; i++) {

                    if (i === data.length) {
                        var heroPic = heroCounter(resultsArr);
                        var hName = heroPic;
                        var picName = heroPic.charAt(0).toLowerCase() + heroPic.slice(1);
                        if (hName === Soldier76) {
                            var picURL = "https://blzgdapipro-a.akamaihd.net/hero/soldier-76/icon-portrait.png";
                        } else {
                            var picURL = "https://blzgdapipro-a.akamaihd.net/hero/" + picName + "/icon-portrait.png";
                        }
                        $("#heroPic").attr("src", picURL);
                        $("#heroPic").css("visibility", "visible");
                        $("#heroName").html("<h3 align='center'>" + heroPic + "</h3>");
                    } else {
                        var currentArr = dbToArray(data[i]);
                        for (var j = 0; j < currentArr.length; j++) {
                            if (currentArr[j].indexOf(charArray) === -1) {
                                resultsArr.push(currentArr[j]);
                            }
                        }
                    }
                }


            } else {

                if (char5 != 'none') {
                    teamParse(char1, char2, char3, char4, 'none');
                } else if (char4 != 'none') {
                    teamParse(char1, char2, char3, 'none', char5);
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
        var currentCount;

        for (var i = 0; i <= heroes.length; i++) {
            if (i === heroes.length) {
                console.log("heroCounter selected: " + bestMatch);
                return bestMatch;
            } else if (charArray.indexOf(heroes[i]) === -1) {
                currentCount = arrCounter(arr, heroes[i]);
                if (currentCount > highCount) {
                    highCount = currentCount;
                    bestMatch = heroes[i];
                }
            }
        }
    }



    // From user-entry

    //Changed limit to 5
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

    //The FINAL ENTRY ROUND SUBMISSION
    //needs to add the data from win/loss, atk/defend, map type, map area
    $('#suggest-hero').on('click', function(event) {
        event.preventDefault();
        // gets team comp
        var teamComp = [];
        $('.hero-portrait-image.orange').each(function() {
            teamComp.push($(this).attr("name"));
        });
        console.log(teamComp);
        console.log("teamComp supposed to be made" + teamComp);

        if (teamComp.length === 1) {
            teamParse(teamComp[0], 'none', 'none', 'none', 'none');
        } else if (teamComp.length === 2) {
            teamParse(teamComp[0], teamComp[1], 'none', 'none', 'none');
        } else if (teamComp.length === 3) {
            teamParse(teamComp[0], teamComp[1], teamComp[2], 'none', 'none');
        } else if (teamComp.length === 4) {
            teamParse(teamComp[0], teamComp[1], teamComp[2], teamComp[3], 'none');
        } else if (teamComp.length === 5) {
            teamParse(teamComp[0], teamComp[1], teamComp[2], teamComp[3], teamComp[4]);
        }
    });



});