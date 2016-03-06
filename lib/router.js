/**
 * Created by jonathan on 26/02/2016.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
});

//
Router.route('/', {name: 'home'});

//
Router.route('/login', {name: 'login'});

//
Router.route('/bakeries', {
    name: 'bakeriesList',
    onBeforeAction: function(){
        if (!Meteor.user()) {
            this.render('login');
        } else {
            this.next();
        }
    }
});

//
Router.route('/cart', {
    name: 'cartList',
    onBeforeAction: function(){
        if (!Meteor.user()) {
            this.render('login');
        } else {
            this.next();
        }
    }
});

//
Router.route('/bakery/:_id', {
    name: 'bakeryDetails',
    data: function() { return Bakeries.findOne(this.params._id); },
    onBeforeAction: function(){
        if (!Meteor.user()) {
            this.render('login');
        } else {
            this.next();
        }
    }
});