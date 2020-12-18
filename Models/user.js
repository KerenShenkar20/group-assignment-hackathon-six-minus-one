const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    id: { type: Number},
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    city: {type: String},
    address: {type:String},
    help_type: {type: String},
    day: {type: String},
    userType: {type: String}
}, {collection: 'users'});

//Testtttt

//Need validation
//userSchema.
//    path('id')
//    .validate(id=> id>0, "it must be nore then 0");
userSchema.
path('first_name')
.set(first_name => String(first_name).toUpperCase());
const User = model('User', userSchema);

module.exports = User;