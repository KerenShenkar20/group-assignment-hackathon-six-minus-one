const User = require('../Models/user');

exports.userDbController = {
    getUsers(req,res){
        User.find({})
        .then(docs => { res.json(docs)})
        .catch(err => console.log(`Error getting the data from db: ${err}`));
    },
    addUser(req,res){
        const newUser = new User({
            //check, validations
            "id": req.body.id,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email": req.body.email,
            "city": req.body.city,
            "address": req.body.address,
            "help_type": req.body.help_type,
            "day": req.body.day,
            "userType": req.body.userType
        });
        const result = newUser.save();
        if (result){
            res.json(result)
        } else{
            res.status(404).send("Error saving a user");
        }
    },
     getUser(req,res) {
         //const id = req.params.id;
         const city = req.query.city;
         const day = req.query.day;
         const help = req.query.help_type;
         User.findOne({city:city}, {day:day}, {help:help})
         .then(docs => { res.json(docs)})
         .catch(err => console.log(`Error getting the data from db: ${err}`));
    }
}
