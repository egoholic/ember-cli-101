import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    {
      get() {
        return true;
      }
    }
  ),

  actions: {
    save() {
      if (this.get('isValid')) {
        this.model.save().then((friend) => {
          this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }

      return false;
    },

    cancel() {
      return true;
    }
  }
});
