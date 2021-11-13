const mongoose = require('mongoose');

const ATLAS_URI = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Erroa al inicializar DB');
    }
};

module.exports = {
    ATLAS_URI
}