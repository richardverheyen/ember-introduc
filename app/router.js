import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('nearby');
  this.route('profile');
  this.route('profiles', { path: '/profiles' }, function() {
    this.route('profile', { path: '/:id' });
  });
});

export default Router;
