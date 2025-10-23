window.onload = function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navLinks');

    // site navigation
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const target = link.getAttribute('data-target');
            sections.forEach(sec => sec.style.display = (sec.id === target) ? 'block' : 'none');
        });
    });

    // portfolio galleries
    const galleries = {
        paintings: [
            'https://github.com/wenyulin-11/Fall2025demo/blob/main/light.jpg?raw=true',
        ],
        drawings: [
            'https://github.com/wenyulin-11/Fall2025demo/blob/main/IMG_0613.jpg?raw=true',
           
        ],
        older: [
            'https://github.com/wenyulin-11/Fall2025demo/blob/main/IMG_0614.jpg?raw=true'
        ],
        studies: [
            'https://github.com/wenyulin-11/Fall2025demo/blob/main/IMG_0617.jpg?raw=true'
        ],
      
     sculptures: [
        'https://github.com/wenyulin-11/Fall2025demo/blob/main/art193.jpg?raw=true',
    ],
      
    };

    const portfolioButtons = document.querySelectorAll('.portfolioLinks');
    const lightbox = document.getElementById('lightbox');
    const mainImage = document.getElementById('mainImage');
    const thumbsContainer = document.getElementById('thumbsContainer');
    const closeBtn = document.querySelector('.light-box .close');

    portfolioButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const galleryName = btn.getAttribute('data-gallery');
            const images = galleries[galleryName];

            mainImage.src = images[0];
            thumbsContainer.innerHTML = '';
            images.forEach(src => {
                const thumb = document.createElement('img');
                thumb.src = src;
                thumb.addEventListener('click', () => mainImage.src = src);
                thumbsContainer.appendChild(thumb);
            });

            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', e => {
        if(e.target === lightbox) lightbox.style.display = 'none';
    });

    // default section
    document.getElementById('portfolioSection').style.display = 'block';
};
