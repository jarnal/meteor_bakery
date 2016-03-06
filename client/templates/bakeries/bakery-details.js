/**
 * Created by jonathan on 26/02/2016.
 */

/**
 * Bakeries details helpers
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
    //Returns the list of catogories
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
 * Bakeries details events
 */
Template.bakeryDetails.events({
    'change #categorySelection': function(event, template) {
        var value = $(event.target).val();
        Session.set('categorySelected', value);
    }
});

Template.bakeryDetails.onRendered(function() {
    GoogleMaps.load();
});

Template.bakeryDetails.onCreated(function() {

    GoogleMaps.ready('exampleMap', function(map) {
        var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
        });
    });
});

Template.bakeryDetails.onDestroyed(function(){
    Session.set('categorySelected', undefined);
});