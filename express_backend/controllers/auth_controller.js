const UserModel = require("./../database/models/user_model");
const JWTService = require("./../services/jwt_service");

function login(req, res) {
    const token = JWTService.generateToken(req.user);
    return res.json({ token });
};

function register(req, res, next) {
    const { username, password, key } = req.body;
    if (key === process.env.ADMIN_KEY) {
        const user = new UserModel({ username: username });
        UserModel.register(user, password, (err, user) => {
            if (err) {
                return next(new HTTPError(500, err.message));
            }

            const token = JWTService.generateToken(user);

            return res.json({ token });        
        });
    } else {
        res.json('Incorrect key');
    }
}


module.exports = {
    register,
    login
}