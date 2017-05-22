import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profiles-selected', 'Integration | Component | profiles selected', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{profiles-selected}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs `
    {{#profiles-selected}}
      template block text
    {{/profiles-selected}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
