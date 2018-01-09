// READ the Food2Fork API docs: http://food2fork.com/about/api

// Search Requests to --> http://food2fork.com/api/search
// Recipe Request to ---> http://food2fork.com/api/get


const search_endpoint = 'http://food2fork.com/api/search'
const recipe_endpoint = 'http://food2fork.com/api/get'
const api_key = `b1e2e3086bc7b16601f541716bc0bfc7`
const results = document.querySelector(`.results`)
// const searchForm = document.querySelector(`#search-form`);
let term = ''
const searchInput = document.getElementById('search-term');
searchInput.addEventListener('keypress', (e) => {
    e.preventDefault()
    if (e.keyCode === 13) {
        console.log(e.target.value)
    }

})


function searchRequest(term) {
    $.ajax({
            url: `${search_endpoint}?key=${api_key}&q=${term}`

            // http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken
        })
        .done(function (response) {
            console.log(response)
            // console.log(response.data[0].images.original.url)

            // for (let i = 0; i < response.data.length; i++) {
            //     results.innerHTML += `<img src="${response.data[i].images.original.url}">`
            // }

        })
}

function recipeRequest(term, path) {
    $.ajax({
            url: `${recipe_endpoint}${path}?api_key=${api_key}&q=${term}`
        })
        .done(function (response) {
            console.log(response)
            // console.log(response.data[0].images.original.url)

            for (let i = 0; i < response.data.length; i++) {
                results.innerHTML += `<img src="${response.data[i].images.original.url}">`
            }

        })
}

// searchForm.addEventListener(`submit`, function (e) {
//     e.preventDefault()

//     const term = document.querySelector('#search-term').value

//     results.innerHTML = ``
//     recipeRequest(term, 'search')
// })

// const trendingButtom = document.querySelector('#trending')
// trendingButtom.addEventListener('click', function (e) {
//     results.innerHTML = ''
//     recipeRequest(undefined, 'trending')


// })

// const randomButtom = document.querySelector('#random')
// randomButtom.addEventListener('click', function (e) {
//     results.innerHTML = ''
//     $.ajax({
//             url: `${recipe_endpoint}/random?api_key=${api_key}`
//         })

//         .done(function (response) {
//             console.log(response)
//             results.innerHTML += `<img src="${response.data.image_url}">`
//         })
// })

// General Search:

//http://food2fork.com/api/search?key=b1e2e3086bc7b16601f541716bc0bfc7&q=shredded%20chicken

// Recipe Search:

// http://food2fork.com/api/get?key=b1e2e3086bc7b16601f541716bc0bfc7&rId=35171