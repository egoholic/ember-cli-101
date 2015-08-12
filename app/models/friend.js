import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number'),
  fullName: Ember.computed('firstName', 'lastName', function() {
    var firstName = this.get('firstName'),
        lastName  = this.get('lastName');

    if (firstName && lastName) {
      return firstName + ' ' + lastName;
    } else if (firstName) {
      return firstName;
    } else if (lastName) {
      return fullName;
    } else {
      return '';
    }
  })
});
