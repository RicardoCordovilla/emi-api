const Pays = require('./pays.model');

const getPays = async (req, res) => {
    const pays = await Pays.findAll();
    res.json(pays);
};

const getPayById = async (req, res) => {
    const { id } = req.params;
    const pays = await Pays.findByPk(id);
    res.json(pays);
};

const createPays = async (req, res) => {
    const date= new Date().toISOString().slice(0, 10);
    const { name, amount, comment } = req.body;
    if (!name || !amount) {
        return res.status(400).json({ 
            // error: 'name and amount are required',
            fields:{
                name: name ? 'valid' : 'required',
                amount: amount ? 'valid' : 'required',
            }
         });
    }
    const pays = await Pays.create({ name, date, amount, comment });
    res.json(pays);
};


module.exports = {
    getPays,
    getPayById,
    createPays,
};