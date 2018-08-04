// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.
// path package to get the correct file path for our html

var path = require('path');

module.exports = function (app) {

	// HTML GET Requests
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// If no matching route is found default to home
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
