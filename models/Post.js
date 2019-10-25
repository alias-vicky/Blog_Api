// Importation de module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema({
    titre: {
        type: String,
        required: true
    },
    corp: {
        type: String,
        required: true
    },
    date_de_creation: {
        type: Date,
        default: Date.now()
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);