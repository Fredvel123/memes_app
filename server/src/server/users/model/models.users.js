import { DataTypes } from 'sequelize';
import sequelize from '../../../config/database/db.conection.js';

const usersModel = sequelize.define('users', {
    id: {
        type: DataTypes.TEXT,
        primaryKey: true
    },
    full_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    nick_name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {timestamps: false})

export default usersModel;