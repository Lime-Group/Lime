const User = require('../models/User');
const router = require("express").Router();
const bcrypt = require('bcrypt')

// update user
router.put("/:id", async(req, res) => {
    if(req.body.userId === res.params.id || req.user.role == "Admin"){
        if(req.body.password){
            try {
                req.body.password = bcrypt.hash(req.body.password, 12);
            } catch (error) {
                return res.json(error);
            }
            req.body.password = bcrypt.hash(req.body.password, 12);
        }
    } else{
        return res.status(403).json({ message : "Вы можете обновить только свой аккаунт"})
    }
});

// delete user


//friend request(follow a user)


//unfriend/unfollow a user



module.exports = router;