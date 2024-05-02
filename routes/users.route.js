const express = require('express');
const router = express.Router();
const Auth = require('../middlewares/users.middleware');
const {
    get_all_users,
    get_user_by_id,
    add_user,
    update_user,
    delete_user
} = require('../controllers/users.controller');

router.get('/v1/users', Auth,(req, res) => {
    get_all_users(req, res);
});

router.get('/v1/users/:id', Auth,(req, res) => {
    get_user_by_id(req, res);
});

router.post('/v1/users', Auth,(req, res) => {
    add_user(req, res);
});

router.put('/v1/users/:id', Auth,(req, res) => {
    update_user(req, res);
});

router.delete('/v1/users/:id', Auth,(req, res) => {
    delete_user(req, res);
});

module.exports = router;