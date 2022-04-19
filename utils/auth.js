const withAuth = (req, res, next) => {
    // This conditional statement explains that if the user is not signed in then they automatically be directed to the login page
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
    // next() is called when the user is logged in and executes the next order into allowing the user to view the page 
        next();
    }
};

module.exports = withAuth;
