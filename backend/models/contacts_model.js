const mongoose = require('mongoose');

const schema = mongoose.Schema;

const contactsSchema = new schema({
    name:{type: String, required: true},
    phone_number:{type: String, required: true},
    address: {type: String, required: false}
});

const Contacts = mongoose.model('Contacts', contactsSchema);
module.exports = Contacts;