/**
 * Created by jonathan on 26/02/2016.
 */

/**
 * Bakeries fixtures
 */
if (Bakeries.find().count() === 0) {

    var sampleBakeries = [
        {
            name: 'Au bon pain',
            address: {
                name: '8 rue Verlaine, 69008 Lyon',
                lat: '45.7636624',
                lon: '4.8334438'
            },
            image: 'aubonpain.png',
            schedule: {
                monday:"9h-19h",
                tuesday:"9h-19h",
                wednesday:"9h-19h",
                thursday: "9h-19h",
                friday: "9h-19h",
                saturday: "9h-13h",
                sunday: "-"
            },
            phone_number: '0472240000'
        },
        {
            name: 'Le fournil',
            address: {
                name: '8 rue de la République, 69002 Lyon',
                lat: '45.7636624',
                lon: '4.8334438'
            },
            image: 'lefournil.png',
            schedule: {
                monday:"8h-18h",
                tuesday:"8h-18h",
                wednesday:"8h-18h",
                thursday: "8h-18h",
                friday: "8h-18h",
                saturday: "8h-14h",
                sunday: "-"
            },
            phone_number: '0472240000'
        }
    ];

    _.each(sampleBakeries, function(bakery) {
        Bakeries.insert(bakery);
    });

}

/**
 * Products fixtures
 */
if (Products.find().count() === 0) {

    var firstBakery = Bakeries.findOne({name: 'Au bon pain'});
    var secondBakery = Bakeries.findOne({name: 'Le fournil'});
    var pizzeria = Bakeries.findOne({name: 'Mamma mia'});

    var sampleProducts = [
        {
            name: 'Jambon beurre',
            image: 'parisien.jpg',
            price: 3.50,
            bakery_id: firstBakery._id,
            category_name: "sandwich",
            stock: 100
        },
        {
            name: 'Rosette',
            image: 'savoureux.jpg',
            price: 3.50,
            bakery_id: firstBakery._id,
            category_name: "sandwich",
            stock: 25
        },
        {
            name: 'Tomate Mozzarelle',
            image: 'tomatemozzarelle.jpg',
            price: 3.50,
            bakery_id: firstBakery._id,
            category_name: "sandwich",
            stock: 25
        },
        {
            name: 'Coca-Cola',
            image: 'cocacola.jpg',
            price: 1.50,
            bakery_id: firstBakery._id,
            category_name: "drink",
            stock: 25
        },
        {
            name: 'Cristaline',
            image: 'cristaline.jpg',
            price: 1.50,
            bakery_id: firstBakery._id,
            category_name: "drink",
            stock: 25
        },
        {
            name: 'Fanta',
            image: 'fantaorange.jpg',
            price: 1.50,
            bakery_id: firstBakery._id,
            category_name: "drink",
            stock: 25
        },
        {
            name: 'Tarte aux pommes',
            image: 'tartepommes.jpg',
            price: 2.50,
            bakery_id: firstBakery._id,
            category_name: "dessert",
            stock: 25
        },
        {
            name: 'Tarte aux framboises',
            image: 'tarteframboises.jpg',
            price: 2.50,
            bakery_id: firstBakery._id,
            category_name: "dessert",
            stock: 25
        },
        {
            name: 'Eclair au chocolat',
            image: 'eclairchocolat.jpg',
            price: 2.50,
            bakery_id: firstBakery._id,
            category_name: "dessert",
            stock: 25
        },
        {
            name: 'Parisien',
            image: 'parisien.jpg',
            price: 3.50,
            bakery_id: secondBakery._id,
            category_name: "sandwich",
            stock: 100
        },
        {
            name: 'Savoureux',
            image: 'savoureux.jpg',
            price: 3.50,
            bakery_id: secondBakery._id,
            category_name: "sandwich",
            stock: 25
        },
        {
            name: 'Mozzarelle Tomate',
            image: 'tomatemozzarelle.jpg',
            price: 3.50,
            bakery_id: secondBakery._id,
            category_name: "sandwich",
            stock: 25
        },
        {
            name: 'Coca-Cola Nature',
            image: 'cocacola.jpg',
            price: 1.50,
            bakery_id: secondBakery._id,
            category_name: "drink",
            stock: 25
        },
        {
            name: 'Eau Cristaline',
            image: 'cristaline.jpg',
            price: 1.50,
            bakery_id: secondBakery._id,
            category_name: "drink",
            stock: 25
        },
        {
            name: 'Fanta Orange',
            image: 'fantaorange.jpg',
            price: 1.50,
            bakery_id: secondBakery._id,
            category_name: "drink",
            stock: 25
        },
        {
            name: 'Tarte aux pommes',
            image: 'tartepommes.jpg',
            price: 2.50,
            bakery_id: secondBakery._id,
            category_name: "dessert",
            stock: 25
        },
        {
            name: 'Eclair au chocolat',
            image: 'eclairchocolat.jpg',
            price: 2.50,
            bakery_id: secondBakery._id,
            category_name: "dessert",
            stock: 25
        }
    ];

    _.each(sampleProducts, function(product) {
        Products.insert(product);
    });

}

/**
 * Categories fixtures
 */
if (Categories.find().count() === 0) {

    var sampleCategories = [
        {
            name: 'sandwich',
            label: 'Sandwich'
        },
        {
            name: 'drink',
            label: 'Boisson'
        },
        {
            name: 'dessert',
            label: 'Dessert'
        }
    ];

    _.each(sampleCategories, function(category) {
        Categories.insert(category);
    });

}