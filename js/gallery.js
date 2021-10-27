(function () {
    const navItems = [
        {
            id: 1,
            rowNaw: 'summer'
        },

        {
            id: 2,
            rowNaw: 'winter'
        },

        {
            id: 3,
            rowNaw: 'spring'
        },

        {
            id: 4,
            rowNaw: 'autumn'
        },

        {
            id: 5,
            rowNaw: 'fishing'
        },

        {
            id: 6,
            rowNaw: 'spa'
        },
    ];

    function renderMenu(navItems) {
        const menuContainer = document.querySelector('.gallery_nav');
        for (const item of navItems) {
            gallery_nav.inner.HTML += `
            <a class="row_nav" href="#">${navItems.rowNaw}</a>
            `
        }
    }

    renderMenu(navItems);
})();
