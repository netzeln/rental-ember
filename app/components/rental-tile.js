import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,

  // sortBy: ['cost:asc'],
  // sortedRentals: Ember.computed.sort('city.rentals', 'sortBy'),

  actions: {
    imageShow: function(){
      this.set('isImageShowing', true);
    },
    imageHide: function(){
      this.set('isImageShowing', false);
    },
    update(rental,params){
      this.sendAction('update', rental, params);
    },

  }
});
