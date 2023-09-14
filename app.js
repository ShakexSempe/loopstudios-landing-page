

// hamburger menu toggle
// select hamburger icon and navlist to be displayed
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('#header .navbar .mobile-nav');
const navItem = document.querySelectorAll('#header .navbar .mobile-list li a');
console.log(navItem);
// add event lister to toggle active class on hamburger on click
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// remove nav-list when item selected
// 


//   
//   


// gallery
const desktop = document.querySelector('.desktop-gallery');
const mobile = document.querySelector('.mobile-gallery');

const work = [
    {
        id: 1,
        title: "deep earth",
        desktop: "images/desktop/image-deep-earth.jpg",
        mobile: "images/mobile/image-deep-earth.jpg",
    },
    {
        id: 2,
        title: "Night arcade",
        desktop: "images/desktop/image-night-arcade.jpg",
        mobile: "images/mobile/image-night-arcade.jpg",
    },
    {
        id: 3,
        title: "Soccer team VR",
        desktop: "images/desktop/image-soccer-team.jpg",
        mobile: "images/mobile/image-soccer-team.jpg",
    },
    {
        id: 4,
        title: `The<span>grid</span>` ,
        desktop: "images/desktop/image-grid.jpg",
        mobile: "images/mobile/image-grid.jpg",
    },
    {
        id: 5,
        title: "From up above VR",
        desktop: "images/desktop/image-from-above.jpg",
        mobile: "images/mobile/image-from-above.jpg",
    },
    {
        id: 6,
        title: "Pocket borealis",
        desktop: "images/desktop/image-pocket-borealis.jpg",
        mobile: "images/mobile/image-pocket-borealis.jpg",
    },
    {
        id: 7,
        title: "The curiosity",
        desktop: "images/desktop/image-curiosity.jpg",
        mobile: "images/mobile/image-curiosity.jpg",
    },
    {
        id: 8,
        title: "Make it fisheye",
        desktop: "images/desktop/image-fisheye.jpg",
        mobile: "images/mobile/image-fisheye.jpg",
    },
    
];

// window event lister : display desktop gallery
window.addEventListener('DOMContentLoaded' , () => {
    desktopGallery(work);
    mobileGallery(work);
});

// desktopGallery 
desktopGallery = (workItems) => {
    let displayItem = workItems.map(item => {
        return `<figure>
            <img src=${item.desktop} alt="img">
            <figcaption>${item.title}</figcaption>
        </figure>`
    });
    displayItem = displayItem.join("");
    desktop.innerHTML = displayItem;

}

// mobileGallery
mobileGallery = (workItems) => {
    let displayItem = workItems.map(item => {
        return `<figure>
            <img src=${item.mobile} alt="img">
            <figcaption>${item.title}</figcaption>
        </figure>`
    });
    displayItem = displayItem.join("");
    mobile.innerHTML = displayItem;
}


// transparent navbar
const main = document.getElementById('main');
const header = document.querySelector('.navbar')
const mainOptions = {
    rootMargin:'0px 0px 0px 0px',
};

const mainObserver = new IntersectionObserver(
    function(entries, mainObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                console.log('Item IS io');
                header.classList.remove('active-header');
            } else {
                console.log('item NOT io');
                header.classList.add('active-header');
            }
        })
    }, mainOptions
);

mainObserver.observe(main);