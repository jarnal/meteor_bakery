/**
 * Created by jonathan on 06/03/2016.
 */

/**
 * Template helpers
 */
Template.home.helpers({
    //Returns the complete list of bakeries
    bakeries: function() {
        return Bakeries.find();
    }
});