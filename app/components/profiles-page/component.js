import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'main',
  elementId: 'profiles-page',
  latitude: null,
  longitude: null,
  getGeo() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(position => {
        this.get('profile').set('latitude', position.coords.latitude);
        this.get('profile').set('longitude', position.coords.longitude);
      });
    } else {
      console.warn('This browser does not support HTML5 geolocation.');
    }
  },
  didInsertElement() {
    this.getGeo();
  }
});
