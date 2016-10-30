module.exports = {

    autoWatch: true,

    schema: true,

    attributes: {
        name: {
            type: 'string',
            required: true
        },
        username: {
            type: 'string',
            required: true,
            unique: true
        },
        email: {
            type: 'string',
            required: true,
            unique: true
        }
    }
};

