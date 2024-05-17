const { DataTypes } = require("sequilize");
const { roles } = require("../config");
const UserModel = {
    id:{
        type: DataTypes.INTERGER
    },
    username:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    role:{
        type: DataTypes.STRING
    }
}  