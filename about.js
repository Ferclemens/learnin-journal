import data from './data.js'

const recentsEl = document.getElementById('recents')

//renderizamos en el front los posts recibidos
document.addEventListener('DOMContentLoaded', () => {
    //console.log(data);
    let posts = ''
    data.map((post, index) => {
            posts += `
            <div class="post-description" id=${index}>
                <img class="post-img" src=${post.urlImage}>
                <p>${post.date}</p>
                <h1>${post.title}</h1>
                <p>${post.paragraph}</p>
            </div>
            `
    })
    //console.log(hero);
    //console.log(posts);
    recentsEl.innerHTML = posts
})

function ReadPost(postID) {
    let postToRead = data.find((post, index) => post[index] === postID)
    console.log(postToRead);
}