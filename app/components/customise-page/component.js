import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'main',
  elementId: 'customise-page',
  actions: {

    pushToAPI() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      });

      this.get('profile').save();
    }
  }
});
