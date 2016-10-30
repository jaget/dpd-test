module.exports = {
    byPost: function(req, res){
        var _postId = req.param('postId');
        Comment.find({ postId: _postId }, function found(err, comments) {

            if(err) {
                console.log(err);
                res.negotiate();
            }

            var userIds = comments.map(function(comment){
                return comment.userId;
            });

            User.find({ id: userIds }, function found(err, users){
                if(err){
                    res.negotiate();
                }

                comments.forEach(function(comment){//this would be done by water line linking normally
                    comment.user = users.filter(function(user){
                        return user.id == comment.userId;
                    })[0]; //should only be one.
                });

                return res.json(
                    comments
                );
            });
        });
    }
};

