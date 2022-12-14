const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carousel = document.getElementById("carousel");
let activeImg = [];
for (let i = 0; i < images.length; i++) {
    let createElementDiv = document.createElement("div");
    createElementDiv.innerHTML = `<img src="./${images[i].image}" alt="${images[i].title} image">`;
    createElementDiv.classList.add('my_carousel-item');
    carousel.appendChild(createElementDiv);
    activeImg.push(createElementDiv);
}
activeImg[0].classList.add("active");
let imgCounter = 0;

const upButton = document.querySelector(".button.previous");
const downButton = document.querySelector(".button.next");

upButton.addEventListener("click", function(){
    activeImg[imgCounter].classList.remove("active");
    imgCounter++;
    if (imgCounter >= activeImg.length) {
        imgCounter = 0;
    }
    activeImg[imgCounter].classList.add('active');
});

downButton.addEventListener("click", function(){
    activeImg[imgCounter].classList.remove("active");
    imgCounter--;
    if(imgCounter < 0) {
        imgCounter = activeImg.length - 1
    }
    activeImg[imgCounter].classList.add('active');
})


