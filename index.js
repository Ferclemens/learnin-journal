import data from './data.js'

const heroEl = document.getElementById('hero')
const postEl = document.getElementById('posts')
const morePostsEl = document.getElementById('morePosts')
const viewMoreEl = document.getElementById('showMore')

//renderizamos en el front los posts recibidos
document.addEventListener('DOMContentLoaded', () => {
    //console.log(data);
    let hero = ''
    let posts = ''
    data.map((post) => {
        if(post.index === 0){
            hero += `
                <div class="hero" id=${post.index}>
                    <img src=${post.urlImage} class="hero-img">
                    <div class="hero-description">
                        <p class="hero-date">${post.date}</p>
                        <h1>${post.title}</h1>
                        <p>${post.paragraph}</p>
                    </div>
                </div>
            `
        } 
        else if (post.index > 0 && post.index <= 3) {
            posts += `
                <div class="post-description" id=${post.index}>
                    <img class="post-img" src=${post.urlImage}>
                    <p>${post.date}</p>
                    <h1>${post.title}</h1>
                    <p>${post.paragraph}</p>
                </div>
            `
            }
    })
    //console.log(hero);
    //console.log(posts);
    heroEl.innerHTML = hero
    postEl.innerHTML = posts
})

//renderizamos mas posts
viewMoreEl.addEventListener('click', function(){
    showMore()
})

function showMore(){
    let morePosts = ''
    data.map((post) => {
        if(post.index > 3) {
            morePosts += `
                <div class="post-description" id=${post.index}>
                    <img class="post-img" src=${post.urlImage}>
                    <p>${post.date}</p>
                    <h1>${post.title}</h1>
                    <p>${post.paragraph}</p>
                </div>
            `
        }
        morePostsEl.innerHTML = morePosts
    })
}
function ReadPost(postID) {
    let postToRead = data.find((post, index) => post[index] === postID)
    console.log(postToRead);
}
