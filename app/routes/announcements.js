import Ember from 'ember';



export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },
  actions: {
    saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('announcements');
    },
    deleteAnnouncement(announcement) {
      announcement.destroyRecord(), //destroyRecord is it's own special thing
      this.transitionTo('announcements');
    }
  }

});
