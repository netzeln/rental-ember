import Ember from 'ember';

export default Ember.Component.extend({
  thing: null,
  actions: {
    setFilter(choice) {
      this.set('thing', choice);
      console.log('filtered in parent');
      console.log(this.thing);
    },

    sendAnnouncement(params) {
      this.sendAction("sendSaved", params);
    },
    deleteAnnouncement(params) {
      this.sendAction("deleteAnnouncement", params);
    }
  }
});
