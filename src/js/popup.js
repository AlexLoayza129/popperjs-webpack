import toastr from "toastr";
import jQuery from "jquery";

var popcorn = document.getElementById('popcorn');

popcorn.addEventListener('click', () => {
    // alert('Hello in popcorn')
    toastr.info('Are you the 6 fingered man?')
})