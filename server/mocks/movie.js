module.exports = function(app) {
  var express = require('express');
  var movieRouter = express.Router();

  var movies = [
    { id: 1, name: 'The Matrix', imdbId: 'tt0133093'},
    { id: 2, name: 'Constantine', imdbId: 'tt0360486'},
    { id: 3, name: 'HotTub Time Machine', imdbId: 'tt1231587'}
  ];
/*
  movieRouter.get('/', function(req, res) {
    res.send({
      'movies': movies
    });
  });*/

  movieRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  movieRouter.get('/:id', function(req, res) {
    var movie = movies.filter(function(m) {
      return m.imdbId === req.params.id;
    });

    res.send({
      'movie': movie
    });
  });

  movieRouter.put('/:id', function(req, res) {
    res.send({
      'movie': {
        id: req.params.id
      }
    });
  });

  movieRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/movie', movieRouter);
};
