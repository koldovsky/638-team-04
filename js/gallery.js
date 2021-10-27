(function() {
    const navigation = [
        {
            id: 1,
            row_nav: SUMMER,
        },

        {
            id: 1,
            row_nav: WINTER,
        },

        {
            id: 1,
            row_nav: SPRING,
        },

        {
            id: 1,
            row_nav: AUTUMN,
        },

        {
            id: 1,
            row_nav: FISHING,
        },

        {
            id: 1,
            row_nav: SPA,
        }
    ];

    function renderMenu(navigation) {
        const navContainer = document.querySelector('.gallery_nav');
        for (const item of navigation) {
            gallery_nav.innerHTML += `
            <a class="row_nav" href="#">${navigation.row_nav}</a>
            `;
        }
    }

    renderMenu(navigation);
})();
