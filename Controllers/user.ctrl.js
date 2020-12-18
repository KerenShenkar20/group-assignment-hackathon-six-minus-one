const user = require('../Models/user');

exports.userDbController = {
    getUsers(req,res){
        user.find({})
        .then(docs => { res.json(docs)})
        .catch(err => console.log(`Error getting the data from db: ${err}`));
    },
    addUser(req,res){
        const newUser = new user({
            //check, validations
            "id": req.body.id,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email": req.body.email,
            "city": req.body.city,
            "address": req.body.address,
            "help_type": req.body.help_type,
            "time": req.body.time,
            "isVolunteer": req.body.isVolunteer
        });
        const result = newUser.save();
        if (result){
            res.json(result)
        } else{
            res.status(404).send("Error saving a user");
        }
    },
}
