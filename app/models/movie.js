import DS from 'ember-data';

var Movie = DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string')
});

Movie.reopenClass({
  FIXTURES: [
    { id: 1, name: 'The Matrix', url: '/some/url/1'},
    { id: 2, name: 'Constantine', url: '/some/url/2'},
    { id: 3, name: 'HotTub Time Machine', url: '/some/url/3'}
  ]
});

export default Movie;
