import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      text: 'Studying for my law degree, in need of a coffee!',
      image: '/img/scarjo.jpg'
    }, {
      text: 'Studying for my law degree, in need of a coffee!',
      image: '/img/scarjo.jpg'
    }, {
      text: 'Studying for my law degree, in need of a coffee!',
      image: '/img/scarjo.jpg'
    }];
  }
});
