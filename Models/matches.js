
const {Schema, model} = require('mongoose');

const matchSchema = new Schema({
    idMatch: {type: Number},
    idElderly: { type: Number},
    idVolunteer: {type: Number},
}, {collection: 'match'});

module.exports = User