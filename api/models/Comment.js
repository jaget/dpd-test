module.exports = {

    autoWatch: true,

    schema: true,

    attributes: {

        userId: {
            type: 'string',
            required: true
        },
        postId: {
            type: 'string',
            required: true
        },
        text: {
            type: 'string',
            required: true
        }
    }
};

