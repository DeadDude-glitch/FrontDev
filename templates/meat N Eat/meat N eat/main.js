var link1 = document.getElementById("contact");

link1.onmouseenter = function () {
    "use strict";
    link1.innerHTML = "<b>Email Me</b>";
}
link1.onmouseout = function () {
    "use strict";
    link1.innerHTML = "<b>Contact Us</b>";
}



var link2 = document.getElementById("info");

link2.onmouseover = function () {
    "use strict";
    link2.innerHTML = "<b>read my resume</b>";
}
link2.onmouseout = function () {
    "use strict";
    link2.innerHTML = "<b>About Us</b>";
}



var orderReq = document.getElementsByClassName("Orderbutton");

for (let i = 0; i < orderReq.length; i++) {
    orderReq[i].onmouseleave = function () {
        "use strict";
        orderReq[i].innerHTML = "Order Now!";
    }
    orderReq[i].onclick = function () {
        "use strict";
        orderReq[i].innerHTML = "nothing here really";
    };
}


var joinButton = document.getElementById("join");
var subs = document.getElementById("subs");

joinButton.onclick = function () {
    "use strict";
    subs.value = "";
}

var welcome = document.getElementById("income");

welcome.onmouseleave = function () {
    welcome.innerText = "Everywhere is a restaurant" ;
}


//Light Box Functions


// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}