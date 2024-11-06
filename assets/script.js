const slides = [
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
    const tagLineElement = document.querySelector('.tagline'); 
    const dotsContainer = document.querySelector(`.dots`);
    let currentIndex = 0;

    function updateImage() {
        bannerImage.src = slides[currentIndex].image;
        tagLineElement.innerHTML = slides[currentIndex].tagLine;
        updateDots();
    }

    function createDots(){
        // apprendre a creer un element avec javascript
        //apprendre a inserer cet element dans un autre
        slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === currentIndex) {
                dot.classList.add('dot_selected'); 
            }
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateImage();
            });
            dotsContainer.appendChild(dot);
        });
    }

    //rendre les dot active

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('dot_selected'); 
            if (index === currentIndex) {
                dot.classList.add('dot_selected'); 
            }
        });
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
 
    function init() {
        createDots();
        updateImage();
    }
    
    init();

});