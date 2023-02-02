const mongoose_element=require('mongoose');
const UserSchema=mongoose_element.Schema(
    {
        username:String,

        password:String,
        
        usertype:String
    }
);
var UserModel=mongoose_element.model('users',UserSchema);
module.exports={UserModel}


