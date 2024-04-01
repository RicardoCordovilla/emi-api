const Pays = require('./pays.model');

const initModels = () => {
    Pays.sync();
};

module.exports = initModels;