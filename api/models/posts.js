const PATH = "./data.json";
const fs = require('fs');

class Post {

    get() {
        return this.readData();
    }

    getIndividualBlog (postId) {
        const posts = this.readData();
        const foundPosts = posts.find((post) => post.id == postId);
        return foundPosts;
    }

    add (newPost) {
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }
    
    readData () {
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    storeData (rawData) {
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post;