// //////////////////////////fork2fork API////////////////////////////

// Food2Fork offers an API which exposes its ingredient search functionality across its database of publishers. The API gives you access to our ever expanding socially ranked recipe database and state-of-the-art ingredient search function, providing your app with the necessary tools to gain a competitive edge over the competition.

// READ the Food2Fork API docs: http://food2fork.com/about/api

// search_api --> Search Requests to --> http://food2fork.com/api/search
// get_api --> Recipe Request to ---> http://food2fork.com/api/get

// SAMPLE Request:  http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken

// ?key={API_KEY}&q=shredded%20chicken

/////////////////////////RECIPE APP/////////////////////////////////////

const api_key = `b1e2e3086bc7b16601f541716bc0bfc7`;

const searchForm = document.querySelector(`#search-form`);
const searchInput = document.getElementById('search-term');

const results = document.querySelector(`.results`);

searchForm.addEventListener(`submit`, function(e) {
	e.preventDefault();
	const term = document.querySelector('#search-term').value;
	const search_api = `http://food2fork.com/api/search?key=${api_key}&q=${term}`;

	$.ajax({
		url: search_api,
		dataType: 'json',
		success: function(data) {
			let recipes = data.recipes;

			for (let key in recipes) {
				console.log(recipes[key].title);
				results.innerHTML += ` 
				<div class='title'>
								<div class = 'recipe-title'>
										Recipe Title: ${recipes[key].title}
								</div>
								<ul>
										<li>
												Rating: ${recipes[key].social_rank}
										</li>
										<li>
												Publisher: ${recipes[key].publisher}
										</li>
										<li>
												<a href=${recipes[key].publisher_url}/>Publisher</a>
										</li>
										<li>
										<a href=${recipes[key].source_url}/>Source</a> 
										</li>
										<li>
												<a href=${recipes[key].f2f_url}/>Ingredients and Directions at Fork2Fork (f2f)</a>
										</li>
								</ul>
									
						</div>
				`;
				results.innerHTML += `<img class='results_img' src="${recipes[key].image_url}">`;
			}
		},
		error: function(error) {
			console.log('Error: ' + error);
		},
	});
});
