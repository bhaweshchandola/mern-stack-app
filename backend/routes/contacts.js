const router = require('express').Router();
// const Contacts = require('../models/contacts_model');
let Contacts = require('../models/contacts_model');

router.route('/').get((req, res)=> {
    Contacts.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json('Error: '+ err));
})

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const phone_number = req.body.phone_number;
    const address = req.body.address;

    const newContact = new Contacts({
        name,
        phone_number,
        address
    });

    newContact.save()
    .then(newCon => res.json(newCon))
    .catch(err => res.status(400).json("Error: "+ err));
});

module.exports = router;