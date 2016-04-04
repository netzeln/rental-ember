import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['cost:asc'],
  sortedRentals2: Ember.computed.sort('model.rentals', 'sortBy'),
});
