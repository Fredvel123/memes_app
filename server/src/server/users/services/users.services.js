import UsersDb from '../model/models.users.js';

export const getAllUsers = async (req, res) => {
    const users = await UsersDb.findAll();
    if (users.length > 0) {
        res.json(users)
    }else {
        res.json({message: "There's no users added yet"})
    }
}