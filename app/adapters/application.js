import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // namespace: 'api',
  host: 'http://localhost:3000'
  // header: {
  //   'Accept': 'application/vnd.api+json',
  //   'Content-Type': 'application/vnd.api+json'
  // }
});
