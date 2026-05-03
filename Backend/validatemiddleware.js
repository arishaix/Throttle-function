const express = require('express')
const app = express()
const router = express.Router()

function validateUsername(username) {
    if (username && typeof username == 'string' && username.length >= 4 ){
        return true
    }
    else{
        return false
    }
}


function validateUserMiddleware(req, res, next){
    const username = req.body.name
   if(validateUsername(username)){
     next()
   }else{
    res.sendStatus(400)
   }
   
}
module.exports = validateUserMiddleware;