module.exports = {
    HOST: '34.128.125.91',
    USER: 'postgress',
    PASSWORD: 'postgress',
    DB: 'testing',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
