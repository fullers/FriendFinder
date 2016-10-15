
module.exports = function(app, friends) {


app.get('/api/:friends?', function (req, res) {
	
	var chosen = req.params.friends;

	if (chosen === 'friends') { 

		res.json(friends); 

	} else {
		console.log(chosen);

		for (var i = 0; i < friends.length; i++) {
			if (chosen === friends[i].routeName) {
				res.json(friends[i]);
				return;
			}
		}
		res.json(false);

	};
 });
}