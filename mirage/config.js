export default function() {
  this.namespace = '/api';

  this.get('/nearby', function() {
    return {
      data: [{
        text: 'rentals',
        image: '/img/scarjo.jpg'
      }, {
        text: 'rentals',
        image: '/img/scarjo.jpg'
      }, {
        text: 'rentals',
        image: '/img/scarjo.jpg'
      }]
    };
  });
}
