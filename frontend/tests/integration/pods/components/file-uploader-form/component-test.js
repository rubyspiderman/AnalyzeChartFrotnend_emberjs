import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('file-uploader-form', 'Integration | Component | file uploader form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{file-uploader-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#file-uploader-form}}
      template block text
    {{/file-uploader-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
