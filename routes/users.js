const User = require('../models/User');
const router = require("express").Router();

// update user
router.put("/:id", async(req, res) => {
    if(req.body.userId === res.params.id || req.user.role == "Admin"){} else{
        return res.status(403).json({ message : "Вы можете обновить только свой аккаунт"})
    }
});

// delete user


//friend request(follow a user)


//unfriend/unfollow a user



module.exports = router;