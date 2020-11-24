const mongoose = require('mongoose');

// WE WILL NOW CREATE A SCHEMA
// A SCHEMA MEANS IT JUST REPRESENTS HOW THAT POST LOOKS
// TITLE, DESCRIBTION AND SO ON
const PostSchema = mongoose.Schema({
    // WE CAN REMOVE THE 'STRING' AND REQUIRE MULTIPLE THINGS
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// WE NOW EXPORT ALL THIS, AND SET I EQUAL TO mongoose.model('Posts', Schema) - AND GIVE IT A NAME & THE SCHEMA IT SHOULD USE
module.exports = mongoose.model('Posts', PostSchema);



// DU KAN GØRE DET SAMME MED USER
 mongoose.Schema({
     username: String,
     password: String,
 })