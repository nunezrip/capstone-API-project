// READ the Food2Fork API docs: http://food2fork.com/about/api

// search_api --> Search Requests to --> http://food2fork.com/api/search
// get_api --> Recipe Request to ---> http://food2fork.com/api/get

// SAMPLE Request:  http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken

// ?key={API_KEY}&q=shredded%20chicken

const api_key = `b1e2e3086bc7b16601f541716bc0bfc7`;
const search_api = 'http://food2fork.com/api/search';
const get_api = 'http://food2fork.com/api/get';

// Accessing the API repository with GET request

$.ajax({
    type: "GET",
    url: `${search_api}?key=${api_key}&q=''`,
    dataType: "json",
    success: function (data) {
        console.log('success ', data);
    },
    error: function (errorMessage) {
        console.log("error");
    }
});

const searchForm = document.querySelector(`#search-form`);
const searchInput = document.getElementById('search-term');
const results = document.querySelector(`.results`);
let term = '';

searchInput.addEventListener('submit', (e) => {
    e.preventDefault(searchInput);
    console.log(searchInput);
})

$(function () {
    console.log("ready!");
});

searchForm.addEventListener(`submit`, function (e) {
    e.preventDefault();
    const term = document.querySelector('#search-term').value;
    results.innerHTML = search_api;
    console.log(results);
})

const trendingButtom = document.querySelector('#trending')

trendingButtom.addEventListener('click', function (e) {
    results.innerHTML = {
        results
    };
    $.ajax({
            url: `${get_api}?key=${api_key}&q=''`
        })
        .done(function (response) {
            console.log(response);
        })
})

const ratingButtom = document.querySelector('#rating')

ratingButtom.addEventListener('click', function (e) {
    results.innerHTML = '{"count": 30, "recipes": []}';
    $.ajax({
            url: `${search_api}?key=${api_key}&q=''`
        })
        .done(function (response) {
            console.log(response);
        })

})