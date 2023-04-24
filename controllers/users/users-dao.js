import usersModel from "./users-model.js";

export const findAllUsers = async () => {
    const users = await usersModel.find();
    return users;
};

export const findUserById = async (id) => {
    const user = await usersModel.findById(id);
    return user;
};

export const findUserByUsername = async (userName) => {
    const user = await usersModel.findOne({userName});
    return user;
};

export const findAllByRole = async (role) => {
    const users = await usersModel.find({role});
    return users;
};

export const findUserByCredentials = (userName, password) => {
    return usersModel.findOne({userName, password});
};

export const deleteUser = (id) => {
    return usersModel.deleteOne({_id: id});
};

export const createUser = (user) => {
    return usersModel.create(user);
};

export const updateUser = (id, user) => {
    return usersModel.updateOne({_id: id}, user);
};
