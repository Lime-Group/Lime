const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const config = require('config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/User');
const router = Router();


// /api/auth/register
router.post('/register'
[
    check('email', 'Некоректный адрес электронной почты').isEmail(),
    check('password', 'Минимальная длина пароля -- 8 символов').isLength({min: 8})
], async(req, res) =>{
    try {

        
        
        
      const errors = validationResult(req);
      if(!errors.isEmpty){
          return res.status(400).json({
               error: errors.array,
               message: 'Произошла ошибка во время регистрации аккаунта'});
        }

       
      const {email, password} = req.body

      const candidate = await User.findOne({ email });
        if (candidate) {
          return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

   
        
      res.status(201).json({message: 'Регистрация прошла успешно'});

    } catch (error) {
        return res.status(500).json({ message: 'что-то пошло не так...' });
    }
});

// /api/auth/login
router.post('/login'
[
    check('email', 'Введите правильный адрес эл.почты').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
], async(req, res) =>{
    try {
 
        
        const errors = validationResult(req);
        if(!errors.isEmpty){
            return res.status(400).json({
                error: errors.array,
                message: 'Произошла ошибка во время входа в аккаунт'});
        }

        const {email, password} = req.body;
        
        const user = await User.findOne({email});
        if(!user){
            return res.status('400').json({message: 'Такого пользователя не существует'});
        }

        const isMatch = bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status('400').json({message: 'Пароль неверный'});
        }

        const token = jwt.sign(
            {userId: user.id},
            config.get('secretKey'),
            {expiresIn: '1h'}
        );

        res.json({token, userId: user.id})

    } catch (error) {
        res.status(500).json({ message: 'что-то пошло не так...' });
}
});


module.exports = router;