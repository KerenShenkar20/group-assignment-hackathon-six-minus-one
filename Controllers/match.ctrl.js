const Match = require('../Models/match');

exports.matchDbController = {
    getMatches(req,res){
        User.find({})
        .then(docs => { res.json(docs)})
        .catch(err => console.log(`Error getting the data from db: ${err}`));
    }
}
