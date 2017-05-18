export default function() {
  this.namespace = '/api';

  this.get('/rentals', function() {
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
