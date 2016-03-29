import Ember from 'ember';

export default Ember.Component.extend({
  isAnnouncementFormShowing: false,
  typeOfThing: null,
  actions: {
    selectType() {
      this.set('typeOfThing', this.get('type'));
      console.log('selected type!');
      console.log(this.typeOfThing);

    },
    createAnnouncement() {

      var params = {
        title: this.get('title'),
        type: this.get('type'),
        date: this.get('date'),
        body: this.get('body')
      };

      this.set('isAnnouncementFormShowing', false);
      this.sendAction('sendCreateAnnouncement', params);
      this.set('title', "");
      this.set('date', "");
      this.set('type', "");
      this.set('body', "");
    },

    showAnnouncementForm() {
      this.set('isAnnouncementFormShowing', true);
    }
  }

});
