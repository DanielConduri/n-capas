import { DataTypes, NOW } from 'sequelize';
import { sequelize } from '../database/database.js';

export const User = sequelize.define(
    'rsvp_responses',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'first_name'
        },
        cedula: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        guests: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        message: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: NOW
        }
    },
    {
        schema: "seguridad",
        timestamps: false,
        freezeTableName: true,
    }
);