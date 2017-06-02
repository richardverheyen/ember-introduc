import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'main',
  elementId: 'customise-page',
  actions: {
    pushToAPI() {
      this.get('profile').save()
    }
  },
  // latitude: null,
  // longitude: null,
  getGeo() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(position => {
        this.get('profile').set('lat', position.coords.latitude);
        this.get('profile').set('lng', position.coords.longitude);
      });
    } else {
      console.warn('This browser does not support HTML5 geolocation.');
    }
  },
  didInsertElement() {
    this.getGeo();
  }

});
