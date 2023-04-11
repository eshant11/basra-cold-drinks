var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

sideNav.style.right = "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "image/close-window.png"
    }
    else {
        sideNav.style.right = "-250px";
        menu.src = "image/download.png"
    }
};
// All animations will take exactly 1000ms
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

var aboutUs = document.getElementById("aboutUs");
let about = document.getElementById("about");
aboutUs.addEventListener('mouseover', function visibility() {
    about.style.visibility = 'visible';
    about.style.opacity = '1';
    about.style.left = '50%';
    about.style.transform = 'translateX(-50%)';

})
aboutUs.addEventListener('mouseout', function visibilityHidden() {
    about.style.left = '0%';
    about.style.opacity = '0';
})
display();
visibilityHidden();
