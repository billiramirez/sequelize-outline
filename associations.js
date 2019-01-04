// One-To-One associations

// BELONGS TO

// A simple example would be a Player being part of a Team with the foreign key on the player.

const Player = this.sequelize.define('player', {/*attributes*/});
const Team = this.sequelize.define('Team', {/*attributes*/});

Player.belongsTo(Team);