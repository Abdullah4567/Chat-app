const bcrypt = require('bcrypt');
const hashPassword = async (password) => {

    // generating Salt
    const salt = bcrypt.genSaltSync(10);
    // console.log(salt);
    return await bcrypt.hash(password, salt);
}
module.exports = hashPassword;