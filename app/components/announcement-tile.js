import Ember from 'ember';

export default Ember.Component.extend({
  isBodyShowing: false,
  thing: "Weather",
  actions:{
    showBody() {
      if(this.isBodyShowing){
        this.set('isBodyShowing', false);
      } else {
        this.set('isBodyShowing', true);
      }
    },
    delete(announcement){
      if(confirm('Do you Want to Delete this Announcement?')) {
        this.sendAction('deleteAnnouncement', announcement);
      }
    }
  }
});
