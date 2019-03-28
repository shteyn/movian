let express = require('express');
let router = express.Router();

router.get('/users', (req, res) => {
    if (req.query.name) {
        res.send(`You have requested a user ${req.query.name}`);
    } else {
        res.send('You have requested a user');
    }
});



router.get('/users/:name', (req, res) => {

    res.send(`You have requested a user ${req.params.name}`);
});

module.exports = router;