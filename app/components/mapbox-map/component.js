import Ember from 'ember';
//import mapbox-gl mixin
import MapboxGl from 'ember-cli-mapbox-gl/mixins/mapbox-gl';

export default Ember.Component.extend(MapboxGl, {
  // define default map settings
  mapSettings: {
    style: "mapbox://styles/mapbox/dark-v8",
    lat: 52.520007,
    lng: 13.404954,
    zoom: 12,
    interactive: true
  }
  // 
  // useMapboxFunctions: function() {
  //   // this.get('map') returns the map object
  //   this.get('map').getZoom();
  // }

});
