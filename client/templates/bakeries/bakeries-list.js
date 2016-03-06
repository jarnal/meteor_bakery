/**
 * Created by jonathan on 26/02/2016.
 */

/**
 * Template helpers
 */
Template.bakeriesList.helpers({
    //Returns all bakeries
    bakeries: function() {
        return Bakeries.find();
    }
});