/**
 * Created by jonathan on 28/02/2016.
 */
Template.cartItem.helpers({
   purchase_amount:function(){
       return Purchases.findOne(this._id).amount;
   }
});

Template.cartItem.events({
    'click .deletePurchase': function(event, template) {
        var that = this;
        var purchase = Purchases.findOne(this._id);
        Products.update(purchase.product_id, {$inc:{stock:parseInt(purchase.amount)}}, function(error){
            Purchases.remove(that._id);
        });
    },
    'change .amountPurchase': function(event, template) {

        var value = parseInt($(event.target).val());

        var product_id = this.product_id;
        var initial_amount = parseInt( $(".cart-item-container[data-id="+this._id+"]").attr("data-last-amount") );
        var diff = value - initial_amount;

        $(event.target).parent().attr("data-last-amount", value);

        var purchase_id = this._id;
        Purchases.update(purchase_id, {$set:{amount: value}});
        Products.update(product_id, {$inc:{stock:(-diff)}});

        var total_amount = parseInt(Products.findOne(this.product_id).stock) + value;
        $(event.target).attr("max", total_amount);
    }
});