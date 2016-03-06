/**
 * Created by jonathan on 26/02/2016.
 */

/**
 * Template helpers
 */
Template.bakeryDetails.helpers({
    //Returns the list of products of the bakery
    products: function(){
        var categorySelected = Session.get('categorySelected');
        if(categorySelected && categorySelected != "all") {
            return Products.find({'bakery_id':this._id, 'category_name':categorySelected});
        }
        return Products.find({'bakery_id':this._id});
    },
    //Returns the list of categories
    categories: function(){
        return Categories.find();
    },
    //Returns the base options for the google maps instance
    exampleMapOptions: function() {
        var that = this;
        if (GoogleMaps.loaded() && this.address) {

            return {
                center: new google.maps.LatLng(that.address.lat, that.address.lon),
                zoom: 17
            };
        }
    }
});

/**
 * Template events
 */
Template.bakeryDetails.events({
    //Handles when the category select has been clicked
    'change #categorySelection': function(event, template) {
        var value = $(event.target).val();
        Session.set('categorySelected', value);
    }
});

/**
 * Template onRendered event
 */
Template.bakeryDetails.onRendered(function() {
    GoogleMaps.load();
});

/**
 * Template onCreated event
 */
Template.bakeryDetails.onCreated(function() {
    //Initializes the map of the bakery
    GoogleMaps.ready('exampleMap', function(map) {
        var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
        });
    });
});

/**
 * Template onDestroyed event
 */
Template.bakeryDetails.onDestroyed(function(){
    Session.set('categorySelected', undefined);
});