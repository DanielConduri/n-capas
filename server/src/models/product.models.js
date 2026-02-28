import { DataTypes, NOW } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Product = sequelize.define(
    'productos',
    {
        int_producto_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

         int_categoria_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
         str_producto_codigo : {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        
        str_producto_nombre : {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        str_producto_image : {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        
        int_producto_cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        str_producto_marca: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
          int_producto_precio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        str_producto_proveedor: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },

        str_producto_estado: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        dt_fecha_creacion: {
            type: DataTypes.DATE,
            defaultValue: NOW
        },
          str_producto_descripcion: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },

        str_producto_url: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },

          json_producto_imagenes: {
            type: DataTypes.JSONB,
            allowNull: true,
        },

        str_producto_especificaciones: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },

        array_producto_imagenes: {
            type: DataTypes.JSONB,  
            allowNull: true,
        },
        int_oferta_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

         str_producto_caracteristicas: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    },
    {
        schema: "seguridad",
        timestamps: false,
        freezeTableName: true,
    }
);
