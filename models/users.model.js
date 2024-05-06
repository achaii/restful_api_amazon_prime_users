const db = require('../config/db.config');

const UsersModel = {
    get_all_users: (limit, offset, callback) => {
        db.query('SELECT * FROM amazon_prime_users LIMIT ? OFFSET ?', [limit, offset], callback);
    },
    get_users_by_id: (id, callback) => {
        db.query('SELECT * FROM amazon_prime_users WHERE user_id = ?', [id], callback);
    },
    add_user: (user, callback) => {
        db.query('INSERT INTO amazon_prime_users SET ?', [user], callback);
    },
    update_user: (id, user, callback) => {
        db.query('UPDATE amazon_prime_users SET ? WHERE user_id = ?', [user, id], callback);
    },
    delete_user: (id, callback) => {
        db.query('DELETE FROM amazon_prime_users WHERE user_id = ?', [id], callback);
    }
};

module.exports = UsersModel;