import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('profiles', {
    path: '/profiles'
  }, function() {
    this.route('profile', {
      path: '/:id'
    });
  });
  this.route('customise');
});

export default Router;
