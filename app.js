const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const port = 3000;
app.listen(port, function() {
  console.log('Listening to port ' + port);
});

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.engine("hbs", exphbs({extname: 'hbs'}));

app.get('/', function(req, res) {
	var data = {

	}

	res.render("menuPage", data);
});
