// ...............fork2fork API INSTRUCTIONS......................

// Food2Fork offers an API which exposes its ingredient search functionality across its database of publishers. The API gives you access to our ever expanding socially ranked recipe database and state-of-the-art ingredient search function, providing your app with the necessary tools to gain a competitive edge over the competition.

// READ the Food2Fork API docs: http://food2fork.com/about/api

// search_api --> Search Requests to --> http://food2fork.com/api/search
// get_api --> Recipe Request to ---> http://food2fork.com/api/get

// SAMPLE Request:  http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken

// ?key={API_KEY}&q=shredded%20chicken

// ...............END fork2fork API INSTRUCTIONS..................

//.............UPLOAD SCREEN TRANSITION FADE-IN...........

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

//...................VARIABLES.........................

const api_key = `b1e2e3086bc7b16601f541716bc0bfc7`;
const searchForm = document.querySelector(`#search-form`);
const results = document.querySelector(`.results`);
let term = $('#search-term');
let search_api = `http://food2fork.com/api/search?key=${api_key}&q=${term}`;

//.............TRENDING BTN FUNCTION....................

$('#trending_btn').on('click', function() {
	console.log('Search Type: Trending click event');
	search_api = `http://food2fork.com/api/search?key=${api_key}&sort=t`;
	console.log('Search API = ' + search_api);
	$('.results').empty();
	getAPI();
});

//..............RATING BTN FUNCTION......................

$('#rating_btn').on('click', function() {
	console.log('Search Type = Rating click event');
	search_api = `http://food2fork.com/api/search?key=${api_key}&sort=r`;
	console.log('Search API = ' + search_api);
	$('.results').empty();
	getAPI();
});

//..............NEXT-PAGE BTN FUNCTION....................

$('#next_page_btn, #more_btn').on('click', function() {
	console.log('Search Type = Next-page click event');
	search_api = `http://food2fork.com/api/search?key=${api_key}&page=2`;
	console.log('Search API = ' + search_api);
	$('.results').empty();
	getAPI();
});

//..............REFRESHER BTN FUNCTION..........................

$('#refresh-btn-img').on('click', function() {
	console.log('Refresh click event');
	document.querySelector('#search-term').value = '';
	$('.results').empty();
});

//..............MAIN SUBMIT/SEARCH BTN FUNCTION................

searchForm.addEventListener(`submit`, function(e) {
	e.preventDefault();
	$('.results').empty();
	let term = document.querySelector('#search-term').value;
	console.log('Search Type = General Form Term click/enter event');
	search_api = `http://food2fork.com/api/search?key=${api_key}&q=${term}`;
	if (e.keyCode === 13) {
		document.getElementById('submit-btn').click();
	}
	getAPI();
});

//...................AJAX REQUEST FUNCTION.....................

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
										<strong>Recipe Title:</strong> ${recipes[key].title}
								</div>
								<ul>
									<li>
												<strong>Recipe ID:</strong> ${recipes[key].recipe_id}
										</li>
										<li>
												<strong>Rating:</strong> ${rating}
										</li>
										<li>
													<a href=${recipes[key].publisher_url}/>Publisher</a>:</strong> ${recipes[key].publisher}
										</li>
										<li>
										<a href=${recipes[key].source_url}/>Source</a> 
										</li>
										<li>
												<a href=${recipes[key].f2f_url}/>Ingredients and Directions at Food2Fork (f2f)</a>
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

// .........................END OF APPLICATION.........................
