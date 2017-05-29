// Pick Code

var heroes = ['genji', 'mccree', 'pharah', 'reaper', 'soldier-76', 'sombra', 'tracer', 'bastion', 'hanzo', 'junkrat', 'mei', 'torbjorn', 'widowmaker', 'dva', 'orisa', 'reinhardt', 'roadhog', 'winston', 'zarya', 'ana', 'lucio', 'mercy', 'symmetra', 'zenyatta'];

// connection.query('SELECT * WHERE char1 = true, char2 = true, char3 = true, char4=true, char5 = true;', 
function teamParse(char1, char2, char3, char4, char5, map) {
    var whereObj = {};
    var charArr = [];
    if (char1 != 'none') {
        whereObj[char1] = true;
        charArr.push(char1);
    }
    if (char2 != 'none') {
        whereObj[char2] = true;
        charArr.push(char2);
    }
    if (char3 != 'none') {
        whereObj[char3] = true;
        charArr.push(char3);
    }
    if (char4 != 'none') {
        whereObj[char4] = true;
        charArr.push(char4);
    }
    if (char5 != 'none') {
        whereObj[char5] = true;
        charArr.push(char5);
    }

    // Sequelize query to Round Model.  Get all matching teams.
    db.Round.findAll({
        where: whereObj
    }).then(function(data) {

        var resultsArr = [];

        if (data.length > 0) {
            // Push the extra true characters into results Arr
            for (var i = 0; i < data.length; i++) {
                var currentArr = dbToArr(data[i]);
                for (var j = 0; j < currentArr.length; j++) {
                    if (currentArr[j].indexOf(charArray) === -1) {
                        resultsArr.push(currentArr[j]);
                    }
                }
            }
            // Count and Return the most common heroes
            var bestMatch;
            var highCount = 1;

            for (var i = 0; heroes.length; i++) {
                if (charArr.indexOf(heroes[i]) === -1) {
                    if (arrCounter(resultsArr, heroes[i]) > highCount) {
                        highCount = arrCounter(resultsArr, heroes[i]);
                        bestMatch = heroes[i];
                    }
                }
                return bestMatch;
            }
            // Make criteria less rigorous
        } else {
            if (char5 != 'none') {
                char5 = 'none';
            } else if (char4 != 'none') {
                char4 = 'none';
            } else if (char3 != 'none') {
                char3 = 'none';
            } else if (char2 != 'none') {
                char2 = 'none';
            } else if (char1 != 'none') {
                char1 = 'none';
            }
            teamParse(char1, char2, char3, char4, char5, map);
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