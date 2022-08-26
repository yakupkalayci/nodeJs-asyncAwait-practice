const posts = [
    "Post 1",
    "Post 2",
    "Post 3",
];

function addPost(newPost) {
    const promise = new Promise((resolve, reject) => {
        if(newPost) {
            posts.push(newPost);
            resolve(posts.forEach(post => console.log(post)));
        }else {
            reject("Could not add new post");
        }
    });

    return promise;
}


async function listPosts() {
    try{
        const response = await addPost("Post 4");
        console.log(response);
    }
    catch (err){
        console.log(err);
    }
};

listPosts();