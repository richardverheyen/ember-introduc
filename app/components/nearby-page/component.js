import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'main',
  elementId: 'nearby-page',
  isExpanded: false,
  actions: {
    toggleExpandedView() {
      this.toggleProperty('expanded');
      console.log('Toggled expanded state');
    }
  }
});
