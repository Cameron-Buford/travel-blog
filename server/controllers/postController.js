module.exports = {
    getPosts:(req, res) => {
        const db = req.app.get('db');

        db.get_posts().then(posts => {
            res.status(200).send(posts)
        }).catch(err => {
            res.status(500).send(err)
        })
    },
    postPost:(req, res) => {
        const db = req.app.get('db');
        const {title, location, content, image} = req.body;

        db.post_posts(title, location, content, image).then(posts => {
            res.status(200).send(posts)
        }).catch(err => {
            res.status(500).send(err)
        })
    },
    putPost:(req, res) => {
        const db = req.app.get('db');
        const {post_id} = req.params;
        const {title, location, content, image} = req.body;

        db.put_post(post_id, title, location, content, image).then(posts => {
            res.status(200).send(posts)
            }).catch(err => {
                res.status(500).send(err)
        })
    },
    deletePost:(req, res) => {
        const db = req.app.get('db');
        const {post_id} = req.params;

        db.delete_post(post_id).then(posts => {
            console.log(posts)
            res.status(200).send(posts)
        }).catch(err => {
            res.status(500).send(err)
        })
    }
}