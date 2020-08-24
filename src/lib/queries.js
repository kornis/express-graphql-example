const user = require('../models/userModel');

module.exports = {
    getUsers: async () => {
        return await user.find();
    },
    
    getOneUser: async (root, args) => {
        return await user.findOne({firstName: args.firstName});
    },
}