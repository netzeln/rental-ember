import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createAnnouncement() {
      var params = {
        title: this.get('title'),
        type: this.get('type'),
        date: this.get('date'),
        body: this.get('body')
      };
      console.log(params);
      this.sendAction('sendCreateAnnouncement', params);
    }
  }

});
