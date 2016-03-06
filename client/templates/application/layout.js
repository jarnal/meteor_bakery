/**
 * Created by jonathan on 03/03/2016.
 */
Template.layout.helpers({
    //
    cart_items:function(){
        var purchases = Purchases.find({user_id:Meteor.userId()}).fetch();
        var amount = 0;
        _.each(purchases, function(purchase) {
            amount += parseInt(purchase.amount);
        });
        return amount;
    }
});

Template.layout.events({
    'click .nav-button ' : function(event, template){
        $(".nav-button").parent().removeClass("active");
        $(event.target).parent().addClass("active");
    },
    'click #login-buttons-logout' : function(event, template){
        Router.go("/");
    }
});