$(document).ready(function(){
    $('.humberger').click(function () {
        $(this).toggleClass('active');
        $('.list').toggleClass('active');
    })
})

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 50) {
            document.querySelector("header").classList.add("active");
        } else {
            document.querySelector("header").classList.remove("active");
        }

    });

});
