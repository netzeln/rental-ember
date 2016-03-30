import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCity(){
      var params = {
        name: this.get('name'),
        country: this.get('country')
      };
      this.sendAction('save', params);
    }
  }
});
