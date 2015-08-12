import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('frients.show', this.model.id);

      return false;
    }
  }
});
