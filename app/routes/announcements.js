import Ember from 'ember';



export default Ember.Route.extend({
  model() {
    return announcements;
    //return this.store.findAll('announcement');
  }

});
