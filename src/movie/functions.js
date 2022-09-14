const Movie = require("./table");

////node src/app.js --create --movie --title "" --actor ""
exports.addMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject);
    } catch (error) {
        console.log(error);
    }
};

//node src/app.js --read --movie
exports.listMovies = async () => {
    try {
        let list = await Movie.findAll();
        console.table(list.map(({ id, title, actor }) => ({ id, title, actor })));
    } catch (error) {
        console.log(error);
    }
};

//node src/app.js --delete --movie --title "" --actor ""
exports.deleteMovie = async (movieObject) => {
    try {
        await Movie.destroy({ where:  movieObject  });
    } catch (error) {
        console.log(error);
    }
};

//node src/app.js --update --movie --title "" --actor "" --newTitle "" --newActor ""
exports.updateMovie = async (movieObject, updatedObject) => {
    try {
        await Movie.update(updatedObject, {where: movieObject});
    } catch (error) {
        console.log(error);
    }
};


