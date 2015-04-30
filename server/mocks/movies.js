module.exports = function(app) {
  var express = require('express');
  var moviesRouter = express.Router();

  var movies = [
    { id: 1, name: 'The Matrix', imdbId: 'tt0133093'},
    { id: 2, name: 'Constantine', imdbId: 'tt0360486'},
    { id: 3, name: 'HotTub Time Machine', imdbId: 'tt1231587'}
  ];

  moviesRouter.get('/', function(req, res) {
    res.send({
      'movies': movies
    });
  });

  moviesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  moviesRouter.get('/:id', function(req, res) {
    var movie = movies.filter(function(m) {
      return m.imdbId === req.params.id;
    });
    res.send({
      'movies': movie
    });
  });

  moviesRouter.put('/:id', function(req, res) {
    res.send({
      'movies': {
        id: req.params.id
      }
    });
  });

  moviesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/movies', moviesRouter);
};
