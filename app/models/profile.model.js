module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define('profile', {
        first_name: {
            type: Sequelize.STRING,
        },
        last_name: {
            type: Sequelize.STRING,
        },
        phone_num: {
            type: Sequelize.STRING,
        },
        address_id: {
            type: Sequelize.STRING,
        },
        account_id: {
            type: Sequelize.STRING,
        },
        _active: {
            type: Sequelize.STRING,
        },
    });
    return Profile;
};
