/**
 * Created by jonathan on 26/02/2016.
 */
Template.cartList.helpers({
    cartItems: function(){
        var purchases = Purchases.find({user_id: Meteor.userId()});
        return purchases;
    },
    total_articles:function(){
        var purchases = Purchases.find({user_id: Meteor.userId()}).fetch();
        var amount = 0;
        _.each(purchases, function(purchase) {
            amount += parseInt(purchase.amount);
        });
        return amount;
    },
    total_price:function(){
        var purchases = Purchases.find({user_id: Meteor.userId()}).fetch();
        var price = 0;
        _.each(purchases, function(purchase) {
            price += parseInt(purchase.amount) * parseFloat(purchase.product.price);
        });
        return price;
    }
});

Template.cartList.events({
    'click #btn-checkout': function(event, template) {
        $('#myModal').modal('toggle')
    },
    'click #btn-return': function(event, template) {
        Router.go('/bakeries');
    }
});