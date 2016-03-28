import Ember from 'ember';

export default Ember.Component.extend({
  isBodyShowing: false,
  actions:{
    showBody() {
      this.set('isBodyShowing', true);
    }
  }
});
