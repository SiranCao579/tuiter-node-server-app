import * as userDao from './users-dao.js'

let currentUser = null;

const UserController = (app) => {
    app.post('/api/users/login', login)
    app.post('/api/users/logout', logout)
    app.get('/api/users/profile', profile)
    app.post('/api/users/register', register)

    app.get('/api/users', findUsers)
    // app.get('/api/users/:id', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:id', deleteUser);
    app.put('/api/users/:id', updateUser);

}

const findUsers = async (req, res) => {
    const users = await userDao.findAllUsers();
    res.json(users)
}

const findUserById = async (req, res) => {
    const userId = req.params.id;
    const user = await userDao.findUserById(userId);
    res.json(user);
}

const createUser = async (req, res) => {
    const user = await userDao.createUser(req.body);
    if (user) {
        currentUser = user;
        res.json(user);
    } else {
        res.sendStatus(404);
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const status = await userDao.deleteUser(userId);
    res.json(status);
}

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const status = await userDao.updateUser(userId, req.body);
    res.json(status);
}

const login = async (req, res) => {
    const user = req.body;
    const foundUser = await userDao.findUserByCredentials(req.body.userName, req.body.password);
    if (foundUser) {

        currentUser = foundUser;
        res.send(foundUser)
    } else {
        res.sendStatus(404);
    }
}

const logout = async (req, res) => {
    currentUser = null;
    res.sendStatus(204);
}

const profile = async (req, res) => {
    if (currentUser) {
        res.send(currentUser);
        console.log("")
    } else {
        res.sendStatus(404);
    }
}

const register = async (req, res) => {
    const user = req.body;
    const foundUser = await userDao.findUserByUsername(req.body.userName);
    if (foundUser) {
        res.sendStatus(409);
    } else {
        const newUser = await userDao.createUser(user);
        currentUser = newUser;
        console.log(newUser)
        res.json(newUser);
    }
}


export default UserController