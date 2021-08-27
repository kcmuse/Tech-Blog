const { User } = require('../models');

const userData = [
    {
        username: 'Hattori_Hanzo',
        email: 'bestswordmaker@gmail.com',
        password: 'livebytheblade'
    },
    {
        username: 'The_Bride',
        email: 'revengeissweet@gmail.com',
        password: 'onlyiwillwin'
    },
    {
        username: 'bill',
        email: 'iambill@gmail.com',
        password: 'ClarkKent'
    },
    {
        username: 'O_Ren_Ishii',
        email: 'leaderofcrazy88@gmail.com',
        password: 'lucyluiplayedme'
    },
    {
        username: 'Pai_mai',
        email: 'fivepointpalmexploingheartechnique@gmail.com',
        password: 'allittakesis5'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;