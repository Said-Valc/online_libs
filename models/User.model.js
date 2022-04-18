const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:String,
    isBlocked:{ 
        type:Boolean,
        default:false
    },
    books:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:"books"
        }
    ]
})

const User = mongoose.model('User', UserSchema);
module.exports = User;