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

/*************************Has One*************************/

// HasOne associations are associations where the foreign
//  key for the one-to-one relation exists on the target model.

const User = sequelize.define('user', {
    // ...
});

const Project = sequelize.define('project',{
    // ...
});

// One way association
Project.hasOne(User);

/*
  In this example hasOne will add an attribute projectId to the User model!
  Furthermore, Project.prototype will gain the methods getUser and setUser according
  to the first parameter passed to define. If you have underscore style
  enabled, the added attribute will be project_id instead of projectId.

  The foreign key will be placed on the users table.

  You can also define the foreign key, e.g. if you already have an existing
  database and want to work on it:
*/

Project.hasOne(User, { foreignKey: 'initiator_id' })

/*
  Because Sequelize will use the model's name (first parameter of define) for
  the accessor methods, it is also possible to pass a special option to hasOne:
*/

Project.hasOne(User, { as: 'Initiator' })
// Now you will get Project.getInitiator and Project.setInitiator

// Or let's define some self references

const Person = sequelize.define('person', {
    // ...
});

Person.hasOne(Person, {as: 'Father'});
// this will add the attribute FatherId to Person

// also possible:

Person.hasOne(Person, {as: 'Father', foreignKey: 'DadId'});
// This will add the attribute DadId to Person

// In both cases you will be able to do:
Person.setFather
Person.getFather

// If you need to join a table twice you can double join the same table
Team.hasOne(Game, {as: 'HomeTeam', foreignKey : 'homeTeamId'});
Team.hasOne(Game, {as: 'AwayTeam', foreignKey : 'awayTeamId'});

Game.belongsTo(Team);

/**
 * Even though it is called a HasOne association, for most 
 * 1:1 relations you usually want the BelongsTo association 
 * since BelongsTo will add the foreignKey on the 
 * source where hasOne will add on the target.
 */