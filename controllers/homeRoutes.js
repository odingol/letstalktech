const router = require('express').Router();
const {newPost, User, Comment} = require('../models');
const withAuth = require('../utils/auth');


// get request for all posts on the homepage
router.get('/', async (req, res) => {
    try{
        const postData = await newPost.findAll({
            include: [User],
        });
        // serializing the data
        const posts = postData.map((post) => post.get({plain: true}));
        // rendering the posts
        res.render('home', 
        {
            posts,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await newPost.findOne({
           where: {id: req.params.id},
           include: [User, {model: Comment, include: [User]}] 
        })

        if (postData) {
            const post = postData.get({plain: true});
            res.render('postComment', 
            {
                post, 
                logged_in: req.session.logged_in
            })
        }
        else {
            res.status(404).json({message: "There is no post with that id!"}).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        // res.redirect('/');
        return;
    } else {
    res.render('login');
    } 
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        // res.redirect('/');
        return;
    } else {
        res.render('signup');
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await newPost.findAll({
            where: {
                user_id: req.session.user_id
            }
        })

        const posts = postData.map((post) => post.get({plain: true}));

        res.render("dashboard", {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log('Error in rendering dashboard page')
        res.status(500).json(err);
    }
})

router.get('/dashboard/newPost', withAuth, async (req, res) => {
    try {
        res.render("newPost");
    } catch (err) {
        console.log('Error in creating a new post');
        res.status(500).json(err);
    }
});

// Render the edit post page

router.get("/dashboard/:id", withAuth, async (req, res) => {
    try {
        const postData = await newPost.findByPk(req.params.id);
        const post = postData.get({plain: true});
        res.render("editPost", {post, logged_in: req.session.logged_in});
    } catch (err) {
        console.log('Error in rendering the edited post');
        res.status(500).json(err);
    }
});

module.exports = router;



