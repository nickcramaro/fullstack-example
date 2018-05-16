module.exports = (app) => {
    const movieController = require('../controllers/movie.controller');

    app.get('/movie', movieController.getAll);

    app.get('/movie/:id', movieController.get);

    app.post('/movie', movieController.create);

    app.put('/movie', movieController.update);

    app.delete('/movie/:id', movieController.delete);
}