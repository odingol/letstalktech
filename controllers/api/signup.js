const router = require('express').Router();
const {newPost, User, Comment} = require('../../models');



// get request for all posts on the homepage
router.post('/', async (req, res) => {
    try{
        console.log(req.body)
        const newUser = await User.create(req.body)
        req.session.logged_in = true
        req.session.user_id = newUser.id
        res.json({})

    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;



