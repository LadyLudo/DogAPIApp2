'use strict'

function getDogImages() {
    let number = $("input[type='text']").val();
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        .then(response => response.json())
        .then (function (responseJson){
            displayResults(responseJson);
            console.log(responseJson)})
        .catch(error => alert('Something went wrong. Try again later.'));
}
function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImages();
    });
}
function displayResults(responseJson) {
    $('.images').empty();
    for (let i=0; i < responseJson.message.length; i++) {
        console.log('picture loaded');
        $('.images').append(`<img src="${responseJson.message[i]}" class="results-img"><br>`);
    }

}
$(function() {
    console.log('App loaded! Waiting for submit!')
    watchForm();
});
