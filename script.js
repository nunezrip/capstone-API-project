// //////////////////////////fork2fork API////////////////////////////

// Food2Fork offers an API which exposes its ingredient search functionality across its database of publishers. The API gives you access to our ever expanding socially ranked recipe database and state-of-the-art ingredient search function, providing your app with the necessary tools to gain a competitive edge over the competition.

// READ the Food2Fork API docs: http://food2fork.com/about/api

// search_api --> Search Requests to --> http://food2fork.com/api/search
// get_api --> Recipe Request to ---> http://food2fork.com/api/get

// SAMPLE Request:  http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken

// ?key={API_KEY}&q=shredded%20chicken

/////////////////////////VARIABLES///////////////////////////////////

const api_key = `b1e2e3086bc7b16601f541716bc0bfc7`;

const searchForm = document.querySelector(`#search-form`);
const searchInput = document.getElementById('search-term');
const results = document.querySelector(`.results`);

/////////////////SCREEN TRANSITION - fadeIn////////////////////////////

$('.top_img')
	.hide()
	.fadeIn(2000)
	.delay(10000);
$('.btm_img')
	.hide()
	.fadeIn(3000)
	.delay(10000);
$('.search-btns')
	.hide()
	.fadeIn(4000)
	.delay(20000);

/////////////////APPLICATION FUNCTION//////////////////////////////////

const term = document.querySelector('#search-term').value;
let search_api = `http://food2fork.com/api/search?key=${api_key}&q=${term}
	`;

$('#trending_btn').on('click', function() {
	console.log('Trending click event');
	search_api = `http://food2fork.com/api/search?key=${api_key}&q=${term}&sort=t`;
	getAPI();
});

$('#rating_btn').on('click', function() {
	console.log('Rating click event');
	search_api = `http://food2fork.com/api/search?key=${api_key}&q=${term}&sort=r`;
	getAPI();
});

$('#next_page_btn, #more_btn').on('click', function() {
	console.log('Next-page click event');
	search_api = `http://food2fork.com/api/search?key=${api_key}&q=${term}&page=2`;
	getAPI();
});

searchForm.addEventListener(`submit`, function(e) {
	e.preventDefault();
	if (e.keyCode === 13) {
		document.getElementById('submit-btn').click();
	}

	$.ajax({
		url: search_api,
		dataType: 'json',
		success: function(data) {
			let recipes = data.recipes;
			console.log(recipes);
			for (let key in recipes) {
				console.log(recipes[key].title);
				let rating = recipes[key].social_rank;
				rating = Math.floor(rating);
				console.log(rating);

				results.innerHTML += ` 
				<div class='title'>
								<div class = 'recipe-title'>
										Recipe Title: ${recipes[key].title}
								</div>
								<ul>
										<li>
												<strong>Rating:</strong> ${rating}
										</li>
										<li>
													<strong>Publisher:</strong> ${recipes[key].publisher}
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

// ////////FUNCTION FOR NEXT PAGE, TRENDING AND RATING REQUESTS////////////

function getAPI(url, data) {
	$.ajax({
		url: search_api,
		dataType: 'json',
		success: function(data) {
			let recipes = data.recipes;
			console.log(recipes);
			for (let key in recipes) {
				console.log(recipes[key].title);
				let rating = recipes[key].social_rank;
				rating = Math.floor(rating);
				console.log(rating);

				results.innerHTML += ` 
				<div class='title'>
								<div class = 'recipe-title'>
										Recipe Title: ${recipes[key].title}
								</div>
								<ul>
										<li>
												<strong>Rating:</strong> ${rating}
										</li>
										<li>
													<strong>Publisher:</strong> ${recipes[key].publisher}
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
}
