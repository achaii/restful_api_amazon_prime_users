const Users = require('../services/users.service');

const get_all_users = ((req, res) => {
    Users.get_all_users((err, result) => {
        if (err) {
            res.status(500).json({status: 500, message: 'Internal server error'});
            return;
        }

        res.status(201).json({status: 201, message: 'success', data: result});
    });
});

const get_user_by_id = ((req, res) => {
    const id = req.params.id;

    Users.get_user_by_id(id, (err, result) => {
        if (err) {
            res.status(500).json({status: 500, message: 'Internal server error'});
            return;
        }

        if (!result) {
            res.status(404).json({status: 404, message: 'Users tidak ditemukan'});
            return;
        }

        res.status(201).json({status: 201, message: 'success', data: result});
    });
});

const add_user = ((req, res) => {
    const user = req.body;
    Users.add_user(user, (err, result) => {
        if (err) {
            res.status(500).json({status: 500, message: 'Internal server error'});
            return;
        }

        res.status(201).json({status: 201, message: 'Data user tersimpan'});
    });
});

const update_user = ((req, res) => {
    const id = req.params.id;
    const user = req.body;

    Users.update_user(id, user, (err, result) => {
        if (err) {
            res.status(500).json({status: 500, message: 'Internal server error'});
            return;
        }

        res.status(201).json({status: 201, message: 'Data user terupdate'});
    });
});

const delete_user = ((req, res) => {
    const id = req.params.id;

    Users.delete_user(id, (err, result) => {
        if (err) {
            res.status(500).json({status: 500, message: 'Internal server error'});
            return;
        }

        res.status(201).json({status: 201, message: 'Data user terdelete'});
    });
});

module.exports = {
    get_all_users,
    get_user_by_id,
    add_user,
    update_user,
    delete_user
};