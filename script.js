// READ the Food2Fork API docs: http://food2fork.com/about/api

// search_api --> Search Requests to --> http://food2fork.com/api/search
// get_api --> Recipe Request to ---> http://food2fork.com/api/get

// SAMPLE Request:  http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken

// ?key={API_KEY}&q=shredded%20chicken

/////////////////////////RECIPE APP/////////////////////////////////////

const api_key = `b1e2e3086bc7b16601f541716bc0bfc7`;
// const search_api = 'http://food2fork.com/api/search';
const get_api = 'http://food2fork.com/api/get';

const searchForm = document.querySelector(`#search-form`);
const searchInput = document.getElementById('search-term');
const results = document.querySelector(`.results`);

searchForm.addEventListener(`submit`, function (e) {
    e.preventDefault();
    const term = document.querySelector('#search-term').value;
    const search_api = `http://food2fork.com/api/search?key=${api_key}&q=${term}`;
    // const recipes = [];
    $.ajax({
        url: search_api,
        dataType: 'json',
        success: function (data) {

            let recipes = data.recipes;

            for (let key in recipes) {
                // results.innerHTML += `<img src="${recipes[key].image_url}">`
                console.log(recipes[key].title);

                results.innerHTML += ` 
                <div class='title'>
                <br>
                        <div class = 'recipe-title'>
                            Recipe Title: ${recipes[key].title}
                        </div>
                        <br>
                        <a href=
                        <ul>

                            <li>
                                Source URL:  ${recipes[key].source_url} 
                            </li>

                            <li>
                                 f2f URL: ${recipes[key].f2f_url}
                            </li>

                            <li>
                                Publisher: ${recipes[key].publisher}
                            </li>

                            <li>
                                 Publisher URL: ${recipes[key].publisher_url}
                            </li>

                            <li>
                                Rating: ${recipes[key].social_rank}
                            </li>
                           
                        </ul>
                         </a>
                    </div>
                `;
                results.innerHTML += `<img src="${recipes[key].image_url}">`
            }
        },
        error: function (error) {
            console.log('Error: ' + error)
        }
    });
})






////////////////////////////////////////////////////////////////////

// const trendingButtom = document.querySelector('#trending')

// trendingButtom.addEventListener('click', function (e) {
//     results.innerHTML = {
//         results
//     };
//     $.ajax({
//             url: `${get_api}?key=${api_key}&q=''`
//         })
//         .done(function (response) {
//             console.log(response);
//         })
// })

// const ratingButtom = document.querySelector('#rating')

// ratingButtom.addEventListener('click', function (e) {
//     results.innerHTML = '{"count": 30, "recipes": []}';
//     $.ajax({
//             url: `${search_api}?key=${api_key}&q=''`
//         })
//         .done(function (response) {
//             console.log(response);
//         })

// })