(function () {
    const cards = [
        {
            id: 1,
            image: 'img/about-location/section-services/horse.webp',
            title: 'Horse Ranch Cottage',
            description: 'This private cottage is located within the Horse Ranch with a spacious fenced area. Explore a lot of tree-lined trails, see ranch animals and spectacular views.'
        },
        {
            id: 2,
            image: 'img/about-location/section-services/tuolumne-meadows-lodge.webp',
            title: 'Tuolumne Meadows Lodge',
            description: 'The Tuolumne Meadows Lodge offers 70 canvas-tent cabins for you to rent June to late August. This can be your best place to rest after an exhausting backpacking trip.'
        },
        {
            id: 3,
            image: 'img/about-location/section-services/sunrise-vacation-rental.webp',
            title: 'Sunrise Vacation Rental',
            description: 'This beautiful holiday home is waiting for you to stay in. This bright, clean, and modern home is located 29 miles from Yosemite National Park. It has new beds and furniture.'
        },
        {
            id: 4,
            image: 'img/about-location/section-services/donya-maries-cottage.jpg',
            title: 'Donya Marie\'s Cottage',
            description: 'Surrounded by pine trees of the Sierra Foothills, 40 minutes from Yosemite, this modern country cottage is the ideal place to stay in and enjoy the nature around you.'
        },
        {
            id: 5,
            image: 'img/about-location/section-services/sierra-meadow-cottage.webp',
            title: 'Sierra Meadow Cottage',
            description: 'Rent this cabin, located not far from Yosemite National Park, breathe the pure mountain air, drink the cleanest water, and enjoy thrilling sunset/sunrise views from the terrace.'
        },
        {
            id: 6,
            image: 'img/about-location/section-services/yosemites-river-house.webp',
            title: 'Yosemite`s River House',
            description: 'The Yosemite’s River House offers a breathtaking view of the Merced River. This spectacular place will surely make you come back. Rent and enjoy your stay!'
        }
    ];

    function renderCards(cards) {
        const cardsContainer = document.querySelector('.services-card-box');
        for (const card of cards) {
            cardsContainer.innerHTML += `
            <div class="card">
                <img src="${card.image}" class="card-img-top" alt="${card.title}">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.description}</p>
                </div>
            </div>
            `
        }
    }
    renderCards(cards);
})();