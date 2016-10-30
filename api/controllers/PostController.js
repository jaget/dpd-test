module.exports = {
    byUser: function(req, res){
        Post.find({ userId: req.param('userId') }, function found(err, posts) {
            if(err) {
                console.log(err);
                res.negotiate();
            }

            return res.json(
                posts
            );
        });
    }
};

