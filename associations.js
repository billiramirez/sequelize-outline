// One-To-One associations

// BELONGS TO

// A simple example would be a Player being part of a Team with the foreign key on the player.

const Player = this.sequelize.define('player', {/*attributes*/});
const Team = this.sequelize.define('Team', {/*attributes*/});

Player.belongsTo(Team);

// Foreign keys

// By default the foreing key for a belongsTo relation will be 
// generated form the target model name and the target primary key
// name

// The default casing is camelCase however if the source model 
// if configured with underscored: true the foreign will be snake_case

const User = this.sequelize.define('user',{
    // attributes
});

const Company = this.sequelize.define('company', {
    // attributes
});

User.belongsTo(Company);
// Will add companyId to user


const User =this.sequelize.define('user',{
    // attributes
}, {underscored: true});

const Company = this.sequelize.define('company', {
    uuid: {
        type: Sequelize.UUID,
        primaryKey: true
    }
});

User.belongsTo(Company);
// Will add company_uuid to user


// In case where as has been defined it will be used in place
// of the target model name.

const User = this.sequelize.define('user', {
    // attributes
});

const UserRole = this.sequelize.define('userRole', {
    // attributes
});

User.belongsTo(UserRole, {as: 'role'});
// Adds roleId to user rather than userRoleId


/*************************Target keys*************************/

// The target key is te column on the target model that the foreign key
// column on the source model points to. By default key for a belongsTo relation
// will be the target model's primary key. To define a custom column, use the 
// targetKey option

const User = this.sequelize.define('user',{
    // attributes
});

const Company = this.sequelize.define('company',{
    // attributes
});

User.belongsTo(Company,{foreignKey: 'fk_companyname', targetKey: 'name'});
// Adds fk_companyname to user

