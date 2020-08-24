const user = require('../models/userModel');
module.exports = {
    createUser: async (root, { input }) => {
        return await user.create(input)
    },
    updateUser: async (root, { id, input }) => {
        await user.updateOne({_id: id},input)
        return await user.findById(id)
    }
}