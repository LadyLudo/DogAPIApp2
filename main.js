'use strict'

function getDogImages() {
    let number = $("input[type='text']").val();
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson.message))
        .catch(error => alert('Something went wrong. Try again later.'));
}
function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImages();
    });
}
$(function() {
    console.log('App loaded! Waiting for submit!')
    watchForm();
});
