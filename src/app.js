const yargs = require("yargs");
const { sequelize } = require("./db/connection"); 
const { addMovie, listMovies, deleteMovie, updateMovie } = require("./movie/functions");
const {addUser, listUsers, deleteUser, updateUser } = require("./user/functions");

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been successfully established');
    } catch (error) {
        console.log('Unable to connect to the database');
    }
};

testConnection();

const app = async (yargsObject) => {
    try { 
        await sequelize.sync()
        if (yargsObject.create && yargsObject.movie) {
            await addMovie ({ title: yargsObject.title, actor: yargsObject.actor });
            await listMovies();
        } else if (yargsObject.read && yargsObject.movie) {
            await listMovies();
        } else if (yargsObject.update && yargsObject.movie) {
            await updateMovie ({ title: yargsObject.title, actor: yargsObject.actor }, { title: yargsObject.newTitle, actor: yargsObject.newActor });
            await listMovies();
        } else if (yargsObject.delete && yargsObject.movie) {
            await deleteMovie ({ title: yargsObject.title, actor: yargsObject.actor });
            await listMovies();  

        } else if (yargsObject.create && yargsObject.user) {
            await addUser ({ username: yargsObject.username });
            await listUsers();
        } else if (yargsObject.read && yargsObject.user) {
            await listUsers();
        } else if (yargsObject.update && yargsObject.user) {
            await updateUser ({ username: yargsObject.username }, { username: yargsObject.newUsername });
            await listUsers();
        } else if (yargsObject.delete && yargsObject.user) {
            await deleteUser ({ username: yargsObject.username });
            await listUsers();   

        } else {
            console.log("incorrect command");
        }
        await sequelize.close();
    } catch (error) {
        console.log(error);
    }
}; 


app(yargs.argv);
