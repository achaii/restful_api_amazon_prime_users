require('dotenv').config();

const authenticateToken = (req, res, next) => {
    const header = req.headers.authorization;

    if(header !== process.env.TOKEN){
        return res
            .status(401)
            .json({
                status: 401,
                message: 'Unauthorized'
            });
    }

    next();
};

module.exports = authenticateToken;