const User = require("./table");

////node src/app.js --create --user --username ""
exports.addUser = async (userObject) => {
    try {
        await User.create(userObject);
    } catch (error) {
        console.log(error);
    }
};

//node src/app.js --read --user
exports.listUsers = async () => {
    try {
        let list = await User.findAll();
        console.table(list.map(({ id, username }) => ({ id, username })));
    } catch (error) {
        console.log(error);
    }
};

//node src/app.js --delete --user --username "" 
exports.deleteUser = async (userObject) => {
    try {
        await User.destroy({ where:  userObject  });
    } catch (error) {
        console.log(error);
    }
};

//node src/app.js --update --user --username "" --newUsername ""
exports.updateUser = async (userObject, updatedUserObject) => {
    try {
        await User.update(updatedUserObject, {where: userObject});
    } catch (error) {
        console.log(error);
    }
};