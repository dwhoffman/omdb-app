import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('movies', function() {
    this.route('movie', {path: '/:imdbId'}, function() {
      this.route('details', {path: '/details'});
    });
  });
});
