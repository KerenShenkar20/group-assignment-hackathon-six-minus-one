const User = require('../Models/user');

exports.userDbController = {
    getUsers(req,res){
        
        const keys = Object.keys(req.query);
        if(keys.length == 3){
            const city = keys[0];
            const day = keys[1];
            const help = keys[2];
            User.find({city:req.query.city, day:req.query.day, help:req.query.help})
            .then(docs => { res.json(docs)})
            .catch(err => console.log(`Error getting the data from db: ${err}`));
        }
        else if(keys.length > 0 && keys.length < 3){
            res.status(404).send("Error: wrong key");
        }
        else{
            User.find({})
            .then(docs => { res.json(docs)})
            .catch(err => console.log(`Error getting the data from db: ${err}`));
        }
        
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
    }
}
