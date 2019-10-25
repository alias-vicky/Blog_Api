// Importation  de modules
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// Récupérer les posts
router.get('/', (req, res, next) => {
    Post.find()
        .then((posts) => {
            res.json(posts);
        })
        .catch((err) => console.log(err))
});


// Ajouter un post
router.post('/ajouter', (req, res, next) => {
    const titre = req.body.titre;
    const corp = req.body.corp;
    newPost = new Post({
        titre: titre,
        corp: corp
    });
    newPost.save()
    .then(post => {
        res.json(post);
    })
    .catch((err) => console.log(err));
});

// Modifier un post
router.put('/modifier/:id', (req, res, next) => {
    let id = req.params.id;
    Post.findById(id)
        .then(post => {
            post.titre = req.body.titre;
            post.corp = req.body.corp;
            post.save()
                .then(post => {
                    res.send({
                        message: 'Post modifié...',
                        status: 'succes',
                        post: post
                    })
                })
                .catch((err) => console.log(err))

        })
        .catch((err) => console.log(err))
});


module.exports = router;