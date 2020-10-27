var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/database.sqlite');

db.serialize(function() {
  db.run("CREATE TABLE exercice (id INT, titre TEXT, duree TEXT, Description TEXT)");

  var stmt = db.prepare("INSERT INTO exercice VALUES (?,?,?,?)");
  for (var i = 0; i < 10; i++) {
  
  var d = new Date();
  var n = d.toLocaleTimeString();
  stmt.run(i, "exercice "+i, n, "exercice "+i+"sera disponilbe le: "+n);
  }
  stmt.finalize();

  db.each("SELECT * FROM exercice", function(err, row) {
      console.log("Exercice id : "+row.id, row.titre);
  });
});

db.close();