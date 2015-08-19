import Ember from 'ember';
import store from '../stores/counter';

export default Ember.Route.extend({

  actions: {
    increment() {
      store.dispatch({type: "INCREMENT"});
    },

    decrement() {
      store.dispatch({type: "DECREMENT"});
    }
  },

  setupController(controller) {
    controller.set('count', store.getState());
  },

  activate() {
    store.subscribe(() => {
      this.controller.set('count', store.getState());
    });
  }
});
