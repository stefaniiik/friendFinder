const express = require('express');
const bodyParser = require('body-parser');
const path = ('path');


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 require("./app/routing/htmlRoutes.js")(app);
 require("./app/routing/apiRoutes.js")(app);








// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });