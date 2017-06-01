import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'main',
  elementId: 'customise-page',
  actions: {
    pushToAPI() {
      this.get('profile').save();
    }
  }
});
