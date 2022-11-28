module.exports = (app) => {
    const profiles = require('../controllers/profile.controller.js');
    var router = require('express').Router();

    router.post('/', profiles.create);

    router.get('/:id', profiles.findOne);

    router.get('/', profiles.findAll);

    router.delete('/:id', profiles.delete);

    router.put('/:id', profiles.update);

    app.use('/api/profiles', router);
};
