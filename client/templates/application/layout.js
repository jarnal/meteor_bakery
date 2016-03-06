/**
 * Created by jonathan on 03/03/2016.
 */

/**
 * Template helpers
 */
Template.layout.helpers({
    //Returns the total amount of all items in cart
    cart_items:function(){
        var purchases = Purchases.find({user_id:Meteor.userId()}).fetch();
        var amount = 0;
        _.each(purchases, function(purchase) {
            amount += parseInt(purchase.amount);
        });
        return amount;
    }
});

/**
 * Template events
 */
Template.layout.events({
    //Handles when a navigation button has been clicked
    'click .nav-button ' : function(event, template){
        $(".nav-button").parent().removeClass("active");
        $(event.target).parent().addClass("active");
    },
    //Handles when the logout button has been clicked by redirecting to home page
    'click #login-buttons-logout' : function(event, template){
        Router.go("/");
    }
});