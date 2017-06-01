import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'main',
  elementId: 'customise-page',
  actions: {
    saveUserProfile: function() {
      console.log('saved');
    }
  }
});
