const router = require('express').Router();
const { newPost } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a NEW post
router.post('/', withAuth, async (req, res) => {
    // const body = req.body;
    try {
        console.log(req);
    const post = await newPost.create({...req.body, user_id: req.session.user_id});

    res.status(200).json(post);
    }

    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// UPDATE A POST 

router.put('/:id', withAuth, async (req, res) => {
    try {
        console.log('\n\n\nUPDATE POST\n', req.params.id, '\n', req.body)
        const updatePost = await newPost.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        if (updatePost) {
            res.status(200).json(updatePost).end();
        } else {
            res.status(404).json({message: "No post was found with the requested id! Cannot Update!"}).end();
        }

    } catch (err) {
        console.log('Error in editing the request post!')
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletePost = await newPost.destroy({
            where: {
                id: req.params.id,
            }
        });

        if (deletePost) {
            res.status(200).json(deletePost).end();
        } else {
            res.status(404).json({message: "No post was found with the request id! Cannot Delete!"}).end();
        }

    } catch (err) {
        console.log('Error in deleting the requested post')
        res.status(500).json(err);
    }
})


module.exports = router;