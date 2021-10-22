(function () {
    const products = [
        {
            id: 1,
            title: 'cabin-rentals',
            itemsList: ['✅ 1 Bedroom',
                '✅ 1 Bathroom',
                '✅ Sleeps 2',
                'Jetted Tub',
                'Flat Panel TV',
                'Fireplace',
                'Wi-Fi'],
            price: '$65',
            image: 'img/rent-offer/rever-chalet.webp'
        },
        {
            id: 2,
            title: 'lookout-lodge',
            itemsList: ['✅ 2 Bedrooms',
                '✅ 1 Bathroom',
                '✅ Sleeps 4',
                'Hot Tub',
                'Pool Tablet',
                'Jacuzzi Tub',
                'Wi-Fi'],
            price: '$75',
            image: 'img/rent-offer/smoky-view-chalet.webp'
        }
        // {
        //     id: 3,
        //     title: 'lookout-lodge',
        //     description: '✅ 2 Bedrooms',
        //     '✅ 1 Bathroom',
        //     '✅ Sleeps 4',
        //     'Hot Tub'
        //     'Pool Tablet'
        //     'Jacuzzi Tub'
        //     'Wi-Fi',
        //     price: $75,
        //     image: 'img/rent-offer/lookout-lodge.webp'
        // },
        // {
        //     id: 4,
        //     title: 'smoky-view-chalet',
        //     description: '✅ 2 Bedrooms',
        //     '✅ 2 Bathrooms',
        //     '✅ Sleeps 6',
        //     'Whirpool Tub'
        //     'Air Hockey'
        //     'Fireplace'
        //     'Wi-Fi'
        //     price: $85,
        //     image: 'img/rent-offer/smoky-view-chalet.webp'
        // },
        // {
        //     id: 5,
        //     title: 'Mountain Haven',
        //     description: '✅ 3 Bedrooms',
        //     '✅ 2 Bathrooms',
        //     '✅ Sleeps 8',
        //     'Whirpool Tub'
        //     'Grill'
        //     'Fireplace'
        //     'Wi-Fi',
        //     price: $100,
        //     image: 'img/rent-offer/mountain-haven.webp'
        // },
        // {
        //     id: 6,
        //     title: 'Mountain Splash',
        //     description: '✅ 3 Bedrooms',
        //     '✅ 3 Bathrooms',
        //     '✅ Sleeps 10',
        //     'Privat Indoor Pool'
        //     'Pool Table'
        //     'Hot Tub'
        //     'Air Hockey',
        //     price: $150,
        //     image: 'img/rent-offer/mountain-splash.webp'
        // }
    ]
    function renderProducts(products) {
        const productsContainer = document.getElementById('products');
        let content = '';
        for (const product of products) {
            content += `
                <div class="products">
                    <div class="cabin-rentals-img">
                        <img class="cards-img" src="${product.image}" alt="${product.title}" />
                    </div>
                    <article>
                        <h2><span class="price">${product.price}</span>/a night</h2>
                        <h3>${product.title}</h3>
                        <article class="bottons">
                           ${product.itemsList.map(item => `<p>${item}</p>`).join('')}
                        </article>
                        <a href="#" class="orange-button">${product.price} - RESERVE CABIN</a>
                    </article>
                </div>
            `;
        }
        productsContainer.innerHTML = content;
    }
    renderProducts(products)
})();
