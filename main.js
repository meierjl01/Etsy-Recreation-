var main = $('main');
var search = $('.search');
var input = $('.input');

search.on('click', function(e) {
  e.preventDefault();
  var userSearch = input.val();
    console.log(userSearch);
    userSearchResults(userSearch);
});

function userSearchResults(userSearch) {

var settings = {
    url: 'https://api.etsy.com/v2/listings/active.js?api_key=3e2hfjwef43tq3xh6l6al92j&keywords=' + userSearch + '&includes=Images,Shop',
    type: 'GET',
    dataType: 'jsonp',
    success: function(object) {
        console.log(object.results);

        object.results.forEach(function(product, i, arr) {
            var etsyItems = $('<div><img src = "' + product.Images[0].url_170x135 + '"/img><h2>' + product.title + '</h2><h5>' + '$' + product.price + '</h5><h6>' + product.Shop.shop_name + '</h6></div>');

            main.append(etsyItems);

        });
    },
    error: function(xhr, text, error) {
        console.log('etsy request did not work' + error);
    },
};

var data = $.ajax(settings);
console.log(data);
 }
