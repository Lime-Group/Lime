const User = require('../models/User');
const router = require("express").Router();
const bcrypt = require("bcrypt");

// update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.role == "Admin") {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }
      try {
        const user = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Аккаунт успешно обновлён");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("Вы можете обновить только свой аккаунт");
    }
  });

// delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.role == "Admin") {
      try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Аккаунт успешно удалён");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("Вы можете удалить только свой аккаунт");
    }
  });

// get an user


// friend request(follow a user)


// unfriend/unfollow a user



module.exports = router;