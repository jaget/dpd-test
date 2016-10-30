module.exports = {

    autoWatch: true,

    schema: true,

    attributes: {
        userId: {
            type: 'number',
            required: true
        },
        title: {
            type: 'string',
            required: true
        },
        message: {
            type: 'string',
            required: true
        }
    }
};

