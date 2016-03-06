/**
 * Created by jonathan on 06/03/2016.
 */
Template.home.helpers({
    bakeries: function() {
        return Bakeries.find();
    }
});