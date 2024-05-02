const users = require('../models/users.model');

const UsersService = {
    get_all_users: (callback) => {
        users.get_all_users(callback);
    },
    get_user_by_id: (id, callback) => {
        users.get_users_by_id(id, callback);
    },
    add_user: (user, callback) => {
        users.add_user(user, callback);
    },
    update_user: (user, id, callback) => {
        users.update_user(user, id, callback);
    },
    delete_user: (id, callback) => {
        users.delete_user(id, callback);
    }
};

module.exports = UsersService;