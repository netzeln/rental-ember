import Ember from 'ember';

export function filteringPosts(params) {
  console.log(params);
  if (params[0].get('type') === params[1] || !params[1]){
    return true;
  } else {
    return false;
  }

}

export default Ember.Helper.helper(filteringPosts);
