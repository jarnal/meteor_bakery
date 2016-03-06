/**
 * Created by jonathan on 26/02/2016.
 */
Template.productItem.events({
    'click .cart-button': function(event, template) {
        var product_id = this._id;
        var amount = $(event.target).parent().find(".amount");

        var product = Products.findOne(product_id);
        var purchase = Purchases.findOne({user_id: Meteor.userId(), product_id: product_id});
        if(purchase){
            var newAmount = parseInt(purchase.amount) + parseInt(amount.val());
            Purchases.update(purchase._id , {$set:{amount:newAmount}});
        } else {
            purchase = Purchases.insert({
                user_id: Meteor.userId(),
                product_id: product_id,
                product: product,
                amount: amount.val()
            });
        }
        Products.update(product_id, {$inc:{stock:-amount.val()}});

        amount.val(1);
    }
});

Template.productItem.helpers({
    thestock:function(template){
       return this.stock;
    },
    classInput:function(template){
        return this.stock == 0 ? "has-error" : "";
    },
    isDisabled:function(){
        return this.stock == 0;
    }
});