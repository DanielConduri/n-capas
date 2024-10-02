import { DataTypes, NOW } from 'sequelize';
import { sequelize } from '../database/database.js';

export const User = sequelize.define(
    'tb_user',
    {
        int_user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        str_user_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        int_user_age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dt_date_creation: {
            type: DataTypes.DATE,
            defaultValue: NOW
        }
    },
    {
        schema: "ventas",
        timestamps: false,
        freezeTableName: true,
    }
);