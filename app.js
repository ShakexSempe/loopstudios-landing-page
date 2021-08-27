// Night arcade
//   Soccer team VR
//   The grid
//   From up above VR
//   Pocket borealis
//   The curiosity
//   Make it fisheye



// hamburger menu toggle
// select hamburger icon and navlist to be displayed
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('#header .navbar .mobile-list');
const navItem = document.querySelectorAll('#header .navbar .mobile-list li a');
console.log(navItem);
// add event lister to toggle active class on hamburger on click
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// remove nav-list when item selected
navItem.forEach(item => {
    item.addEventListener("click" , () => {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
    })
})
