/**
 * Created by jonathan on 26/02/2016.
 */

/**
 * Template helpers
 */
Template.cartList.helpers({
    //Returns all the items purchased by the current user
    cartItems: function(){
        var purchases = Purchases.find({user_id: Meteor.userId()});
        return purchases;
    },
    //Returns the total amount of products purchased by the current user
    total_articles:function(){
        var purchases = Purchases.find({user_id: Meteor.userId()}).fetch();
        var amount = 0;
        _.each(purchases, function(purchase) {
            amount += parseInt(purchase.amount);
        });
        return amount;
    },
    //Returns the total price of all products purchased by the current user
    total_price:function(){
        var purchases = Purchases.find({user_id: Meteor.userId()}).fetch();
        var price = 0;
        _.each(purchases, function(purchase) {
            price += parseInt(purchase.amount) * parseFloat(purchase.product.price);
        });
        return price;
    }
});

/**
 * Template events
 */
Template.cartList.events({
    //Handles when the checkout button has been clicked
    'click #btn-checkout': function(event, template) {
        $('#myModal').modal('toggle')
    },
    //Handles when the return to store button has been clicked
    'click #btn-return': function(event, template) {
        Router.go('/bakeries');
    }
});