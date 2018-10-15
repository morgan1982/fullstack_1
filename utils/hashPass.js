const bcrypt = require('bcryptjs');





module.exports = async function(pass)  {

    try {

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(pass, salt);

        return passwordHash;

    }catch(error) {
        throw new Error(error)
    }
}
