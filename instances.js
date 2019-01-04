// Building a non-persisten instance

const project = Project.build({
    title: "my awesome project",
    description: "woot woot. This will make me a rich man"
});

const task = Task.build({
    title: "specify the project idea",
    description: "bla",
    deadline: new Date()
});

// Built instances will automatically get default values
// when they were defined


// Define the model
const Task = sequelize.define('task',{
    title: Sequelize.STRING,
    rating: {type: Sequelize.STRING, defaultValue: 3}
});

// instantiate an object

const task = Task.build({
    title: 'very important task'
});

// task.title => "very important"
// task.rating => 3

// To get it stored in the database, use the save-method and catch the events ... if needed:

project.save().then(()=>{
    // to-do
})

task.save().catch(err=>console.log(err));

// you can also build, save and access the object with chaining:

Task
    .build({ title: "foo", description: 'bar', deadline: new Date()})
    .save()
    .then(createdTask => {
        // do some stuff with the createdTask
    })
    .catch(err => console.log(err));

    // Creating persistent instances

    // While an instance created with .build() requires
    //  an explicit .save() call to be stored in the database,
    //   .create() omits that requirement altogether and 
    //   automatically stores your instance's data once called.   

Task.create({title: 'foo', description: 'bar', deadline: new Date()})
    .then(task=>{
        // do some stuff with the task
    })

    // It is also possible to define which attributes can
    //  be set via the create method. This can be especially
    //   very handy if you create database entries based on a 
    //   form which can be filled by a user. Using that would 
    //   for example allow you to restrict the User model to
    //    set only a username and an address but not an admin
    //     flag:

User.create({username: 'barfooz', isAdmin: true}, {fields:['username']})
    .then(user=> {
        console.log(user.get({plain: true}));
    })

    // Updating / Saving / Persisting an instance

// way 1

task.title = 'a very different title now';
task.save().then(()=>{});

// way 2 

task.update({title: 'a very different title now'})
    .then(()=>{})

