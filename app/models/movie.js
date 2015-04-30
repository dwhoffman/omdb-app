import DS from 'ember-data';

var Movie = DS.Model.extend({
  name: DS.attr('string'),
  imdbId: DS.attr('string')
});

export default Movie;
