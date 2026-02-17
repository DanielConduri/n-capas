import { DataTypes, NOW } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Category = sequelize.define(
    'categorias',
    {
        int_categoria_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        str_categoria_nombre : {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        str_categoria_imagen : {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        str_categoria_descripcion: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        str_categoria_estado: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue: "ACTIVO"
        },
        dt_fecha_creacion: {
            type: DataTypes.DATE,
            defaultValue: NOW
        }
    },
    {
        schema: "inventario",
        timestamps: false,
        freezeTableName: true,
    }
);
