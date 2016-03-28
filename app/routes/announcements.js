import Ember from 'ember';

var announcements = [{
  id: 1,
  title: "New Houses For Sale!",
  type: "Sale",
  date: "2016-04-02",
  body: "We are excited to announce the sale of several new homes located in Oregon City, OR. Stop by to view one of these beautiful new developments!"
}, {
  id: 2,
  title: "Storm Coming",
  type: "Weather",
  date: "2016-04-13",
  body: "Typhoon set to hit Oregon Coast. Go to the mountains instead."
}];

export default Ember.Route.extend({
  model() {
    return announcements;
    //return this.store.findAll('announcement');
  }

});
