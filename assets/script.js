const images = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.getElementById('left');
    const rightArrow = document.getElementById('right');
    const bannerImage = document.querySelector('.banner-img');
	

	const images = [
        './assets/images/slideshow/slide1.jpg',
        './assets/images/slideshow/slide2.jpg',
        './assets/images/slideshow/slide3.jpg',
		'./assets/images/slideshow/slide4.png' 
    ];

    let currentIndex = 0;

    function updateImage() {
        bannerImage.src = images[currentIndex];
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; 
        console.log('Clic sur la flèche gauche');
        updateImage();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; 
        console.log('Clic sur la flèche droite');
        updateImage();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.getElementById('left');
    const rightArrow = document.getElementById('right');
    const bannerImage = document.querySelector('.banner-img');
    const tagLineElement = document.querySelector('.tagline'); 

    const slides = [
        {
            image: './assets/images/slideshow/slide1.jpg',
            tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>'
        },
        {
            image: './assets/images/slideshow/slide2.jpg',
            tagLine: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
        },
        {
            image: './assets/images/slideshow/slide3.jpg',
            tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>'
        },
        {
            image: './assets/images/slideshow/slide4.png',
            tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>'
        }
    ];

    let currentIndex = 0;

    function updateImage() {
        bannerImage.src = slides[currentIndex].image;
        tagLineElement.innerHTML = slides[currentIndex].tagLine;
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
        console.log('Clic sur la flèche gauche');
        updateImage();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length; 
        console.log('Clic sur la flèche droite');
        updateImage();
    });

    
    updateImage();
});

