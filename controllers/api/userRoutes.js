const router = require('express').Router();
const { User } = require('../../models');


// signs users up based off their credentials from their signup page
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;
        
        res.status(200).json(userData);
    });

    } catch (err) {
        res.status(500).json(err);
    }
})

// Search for a user with the saved username account 
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
                where: {
                    username: req.body.username,
                },
            });

        if (!userData) {
            res.status(400).json({message: 'Incorrect username, please try again '});
            return;
        }

        const validatePassword = userData.checkPassword(req.body.password);

        if (!validatePassword) {
            res.status(400).json({message: 'Incorrect password, please try again!'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;

            res.json({ userData, message: "You have successfully logged in!" });
        });
    }
    catch (err) {
        res.status(400).json( {message: 'Incorrect email or password, please try again!' })
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        // Executes when the user logs out and it destroyes the session
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(404).end();
    }
})

module.exports = router;