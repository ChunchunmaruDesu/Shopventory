$.ajax({
	url: "https://dog.ceo/api/breeds/list/all",
	dataType: "json",
}).done(function(data) {
	// loop through the array
	const breeds = data.message;
	const breedDiv = $('#breed_list');
	const breedList = $('<ul></ul>').addClass('breeds');

	for (let key in breeds) {
		if (breeds[key].length) {
			for (let i = 0; i < breeds[key].length; i++) {
				breedList.append(`<li>${key} ${breeds[key][i]}</li>`);
				//console.log(`${key} ${breeds[key][i]}`);
			}
		} else {
			breedList.append(`<li>${key}</li>`);
			//console.log(key);
		}
	}
	breedDiv.append(breedList);
});
