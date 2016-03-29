import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    filterType() {
      var choice = this.get('filter');
      console.log('filtered!');
      console.log(choice);
      this.sendAction("sendFilterType", choice);
    },
  }
});
