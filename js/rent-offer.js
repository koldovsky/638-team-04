
 (function () {
 const countDown = () => {
     const countDate = new Date('November 14 , 2021 00:00:00').getTime();
     const now = new Date().getTime();
     const gap = countDate - now;
     
     const second = 1000;
     const minute = second * 60;
     const hour = minute * 60;
     const day =  hour * 24;

     const textDay = Math.floor(gap / day);
     const textHour = Math.floor((gap % day) / hour);
     const textMinute = Math.floor((gap % hour) / minute);
     const textSecond = Math.floor((gap % minute) / second);
     

     document.querySelector(".day").innerText = textDay;
     document.querySelector(".hour").innerText = textHour;
     document.querySelector(".minute").innerText = textMinute;
     document.querySelector(".second").innerText = textSecond;
 };
 setInterval(countDown, 1000);
  

    const products = [
        {
            id: 1,
            title: 'River Chalet',
            itemsList: ['✔ 1 Bedroom',
                '✔ 1 Bathroom',
                '✔ Sleeps 2',
                'Jetted Tub',
                'Flat Panel TV',
                'Fireplace',
                'Wi-Fi'],
            price: '$65',
            image: 'img/rent-offer/rever-chalet.webp'
        },
        {
            id: 2,
            title: 'Lookout Lodge',
            itemsList: ['✔ 2 Bedrooms',
                '✔ 1 Bathroom',
                '✔ Sleeps 4',
                'Hot Tub',
                'Pool Tablet',
                'Jacuzzi Tub',
                'Wi-Fi'],
            price: '$75',
            image: 'img/rent-offer/smoky-view-chalet.webp'
        },
        {
            id: 3,
            title: 'Smoky view chalet',
            itemsList: ['✔ 2 Bedrooms',
                        '✔ 2 Bathrooms',
                        '✔ Sleeps 6',
                        'Whirpool Tub',
                        'Air Hockey',
                        'Fireplace',
                        'Wi-Fi'],
             price: '$85',
             image: 'img/rent-offer/lookout-lodge.webp'
        },
        {
            id: 4,
            title: 'Montain Haven',
            itemsList: ['✔ 3 Bedrooms',
                         '✔ 2 Bathrooms',
                         '✔ Sleeps 8',
                         'Whirpool Tub',
                         'Air Hockey',
                         'Grill',
                         'Wi-Fi'],
             price: '$100',
             image: 'img/rent-offer/mountain-haven.webp'
         },
         {
            id: 5,
            title: 'Mountain Splash',
            itemsList: ['✔ 3 Bedrooms',
                        '✔ 3 Bathrooms',
                        '✔ Sleeps 10',
                        'Privat Indoor Pool',
                        'Pool Table',
                        'Hot Tub',
                        'Air Hockey'],
             price: '$150',
             image: 'img/rent-offer/mountain-splash.webp'
         }
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
                        <a href="#" class="orange-button">RESERVE CABIN</a>
                    </article>
                </div>
            `;
        }
        productsContainer.innerHTML = content;
    }
    renderProducts(products)
})();
