// Pick Algorithm

// connection.query('SELECT * WHERE char1 = true, char2 = true, char3 = true, char4=true, char5 = true;', 
db.findAll({
    where: {
        char1: true,
        char2: true,
        char3: true,
        char4: true,
        char5: true
    }
}).then(function(data) {
    for (var i = 0; i < data.length; i++) {
        if ()
    }
});