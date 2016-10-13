// GET Route
$('#searchBtn').on('click', function () {
			var searchedCharacter = $('#characterSearch').val().trim();

			searchedCharacter = searchedCharacter.replace(/\s+/g, '').toLowerCase();

			$.get('http://localhost:3000/api/friends' + searchedCharacter, function (data) {
				console.log(data);
				if (data) {
					$('#stats').show();
					$('#name').text(data.name);
					$('#role').text(data.role);
					$('#age').text(data.age);
					$('#forcePoints').text(data.forcePoints);
				} else {
					$('#name').text('The force is not strong with this one. Your character was not found. ');
					$('#stats').hide();
				}
			});
});

// POST Route

$('#addBtn').on('click', function () {
			var newCharacter = {
				name: $('#name').val().trim(),
				role: $('#role').val().trim(),
				age: $('#age').val().trim(),
				forcePoints: $('#forcepoints').val().trim()
			};

			// Question: What does this code do??
			$.post('http://localhost:3000/api/new', newCharacter)
				.done(function (data) {
					console.log(data);
					alert('Adding character...');
				});

			return false;
});