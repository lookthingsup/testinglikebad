const db = require('../models');
const Profile = db.profiles;
const Op = db.Sequelize.Op;

exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error retrieving Tutorial with id=' + id,
            });
        });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    Profile.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving tutorials.',
            });
        });
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body.first_name) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
        return;
    }

    const profile = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_num: req.body.phone_num,
        address_id: req.body.address_id,
        account_id: req.body.account_id,
        _active: req.body._active,
    };

    Profile.create(profile)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while creating the Tutorial.',
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Profile.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: 'Profile was deleted successfully!',
                });
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Could not delete Tutorial with id=' + id,
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Profile.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: 'Tutorial was updated successfully.',
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error updating Tutorial with id=' + id,
            });
        });
};
