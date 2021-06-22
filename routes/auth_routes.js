const {Router} = require('express');
const router = Router();

// /api/auth/register
router.post('/register', async(req, res) =>{
    try {
    
    } catch (error) {
        res.status(500).json({ message: 'что-то пошло не так...' });
    }
});

// /api/auth/login
router.post('/login', async(req, res) =>{});


module.exports = router;