document.addEventListener('DOMContentLoaded', function() {
    var infoElement = document.querySelector('.info');
    var descriptionElement = document.querySelector('.description');

    setTimeout(function() {
        infoElement.classList.add('animate-fade-in-left');
    }, 780);

    setTimeout(function() {
        descriptionElement.classList.add('animate-fade-in-left1');
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.contacts').classList.add('show');
    }, 1000); 
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.skills1').classList.add('show1');
    }, 800); 
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.operation').classList.add('show2');
    }, 800); 
});


