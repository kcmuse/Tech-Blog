const { Post } = require('../models');

const postData = [
    {
        title: "TechBlog",
        post_text: "We are live people! Get online and get connected!",
        user_id: "1",
    },
    {
        title: "Bootstrap for Life",
        post_text: "Personally I dont think ill use anything other than bootstrap! How about you?",
        user_id: "2",
    },
    {
        title: "Python?",
        post_text: "Is python worth learning?",
        user_id: "3",
    },
    {
        title: "Best Api's to use",
        post_text: "Anyone got a list of the best api's?",
        user_id: "4",
    },
    {
        title: "VS Code?",
        post_text: "Is there any other options out there? I have only used vscode just wondering!",
        user_id: "5",
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;