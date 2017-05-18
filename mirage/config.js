export default function() {
  this.namespace = '/api';

  this.get('/profiles', function() {
    return {
      data: [{
        type: 'profile',
        id: '1',
        attributes: {
          text: 'rentals',
          image: '/img/scarjo.jpg'
        }
      }, {
        type: 'profile',
        id: '2',
        attributes: {
          text: 'rentals',
          image: '/img/scarjo.jpg'
        }
      }, {
        type: 'profile',
        id: '3',
        attributes: {
          text: 'rentals',
          image: '/img/scarjo.jpg'
        }
      }]
    };
  });
}
