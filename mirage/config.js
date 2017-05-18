export default function() {
  this.namespace = '/api';

  this.get('/profiles', function() {
    return {
      data: [{
        type: 'profile',
        id: '1',
        attributes: {
          text: 'Studying for a law degree, in need of a coffee!',
          image: '/img/scarjo.jpg'
        }
      }, {
        type: 'profile',
        id: '2',
        attributes: {
          text: 'I may look like I\'m working but I\'m really watching cat videos',
          image: '/img/estone.jpg'
        }
      }, {
        type: 'profile',
        id: '3',
        attributes: {
          text: 'Looking for any excuse to take a break',
          image: '/img/ewatson.jpg'
        }
      }]
    };
  });
}
