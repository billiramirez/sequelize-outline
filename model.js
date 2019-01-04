import { lstat } from "fs";

// Model definition

// to define mappings between a model and a table, use the
// define method

const Project = sequelize.define('project', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT
});

const Task = sequelize.define('task', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    deadline: Sequelize.DATE
})

// You can also set some options on each column:

const Foo = sequelize.define('foo', {
    flag: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    myDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // Creating two objects with the same value will throw an error. The unique property can be either a
    // boolean, or a string. If you provide the same string for multiple columns, they will form a
    // composite unique key.
    uniqueOne: {
        type: Sequelize.STRING,
        unique: 'compositeIndex'
    },
    uniqueTwo: {
        type: Sequelize.INTEGER,
        unique: 'compositeIndex'
    },
    // Go on reading for further information about primary keys
    identifier: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    // autoIncrement can be used to create auto_incrementing integer columns
    incrementMe: { type: Sequelize.INTEGER, autoIncrement: true},
    // You can specify a custom field name via the 'field' attribute:
    fieldWithUnderscores: {
        type: Sequelize.STRING,
        field: 'field_with_underscores'
    },
    // It is possible to create foreign keys:
    bar_id: {
        type: Sequelize.INTEGER,
        references: {
            // this is a reference to another model
            model: BarProp,
            // this is the column name of the referenced model
            key: 'id',
            // this reclares when to check the foreign key constraint. PostgreSQL only.
            deferrable: Sequelize.Deferrable.INITIALLY_INMEDIATE
        }
    }
},{someUnique: {type: Sequelize.STRING}},{indexes: [ {unique: true, fields: ['someUnique']}]}) //this could be ommited for the code below

// In the model options you can specify the unique and index as well
// {someUnique: {type: Sequelize.STRING}},
//     {indexes: [ {unique: true, fields: ['someUnique']}]}



/************************TIMESTAMPS******************** */

// By default, Sequelize will add the attributes createdAt and 
// updatedAt to your model so you will be able to know when 
// the datbase entry went into the db and when it was updated lstat

// Note that if you are using Sequelize migrations you will need to add 
// the createdAt and updatedAt fields to your migration definition

module.exports = {
    up(queryInterface, Sequelize){
        return queryInterface.createTable('my-table',{
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            // timestamps
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })
    },
    down(queryInterface, Sequelize){
        return queryInterface.dropTable('my-table');
    },
}


