window.onload = function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navLinks');

    // navigation
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const target = link.getAttribute('data-target');
            sections.forEach(sec => sec.style.display = (sec.id === target) ? 'block' : 'none');
        });
    });

    //  section
    document.getElementById('portfolioSection').style.display = 'block';
};

// Lightbox
const portfolioButtons = document.querySelectorAll('.portfolioLinks');
const lightbox = document.getElementById('lightbox');
const mainImage = document.getElementById('mainImage');
const descriptionText = document.getElementById('imageDescription');
const closeBtn = document.querySelector('.close');

//  Lightbox open
portfolioButtons.forEach(button => {
    button.addEventListener('click', () => {
        const img = button.querySelector('img');
        const description = button.dataset.description;

        mainImage.src = img.src;                    // show
        descriptionText.textContent = description || '';  // showtext
        lightbox.style.display = 'flex';            // 显示 Lightbox

    });
});

// close
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Lightbox close blank
lightbox.addEventListener('click', e => {
    if(e.target === lightbox) lightbox.style.display = 'none';
});

//  data-description br

portfolioButtons.forEach(button => {
    button.addEventListener('click', () => {
        const img = button.querySelector('img');
        const description = button.dataset.description;

        mainImage.src = img.src;
        descriptionText.innerHTML = description; 
        lightbox.style.display = 'flex';
    });
});
