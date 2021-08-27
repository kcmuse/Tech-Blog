const { Comment } = require('../models');

const commentData = [
    {
        user_id: '1',
        post_id: '2',
        comment_text: 'I have used others, but bootstrap by far most user friendly'
    },
    {
        user_id: '2',
        post_id: '3',
        comment_text: 'Python is most definitely worth learning 10/10!'
    },
    {
        user_id: '3',
        post_id: '4',
        comment_text: 'cloudinary api is super awesome for upload photos!'
    },
    {
        user_id: '4',
        post_id: '5',
        comment_text: 'This is a good question! Following to learn more!'
    },
    {
        user_id: '5',
        post_id: '1',
        comment_text: 'Great Job on this blog! I would suggest you change the color scheme and add some flare!'
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;