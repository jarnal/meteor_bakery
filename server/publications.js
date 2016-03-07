/**
 * Created by jonathan on 07/03/2016.
 */
Meteor.publish('bakeries', function() {
    return Bakeries.find();
});

Meteor.publish('products', function() {
    return Products.find();
});

Meteor.publish('purchases', function() {
    return Purchases.find();
});

Meteor.publish('categories', function() {
    return Categories.find();
});