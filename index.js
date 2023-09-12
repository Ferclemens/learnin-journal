import data from './data.js'

const postEl = document.getElementById('post')
const heroEl = document.getElementById('hero')

//renderizamos en el front los posts recibidos
document.addEventListener('DOMContentLoaded', () => {
    //console.log(data);
    let hero = ''
    let posts = ''
    data.map((post, index) => {
        if(index === 0){
            hero += `
                <div class="hero" id=${index}>
                    <img src=${post.urlImage} class="hero-img">
                    <div class="hero-description">
                        <p class="hero-date">${post.date}</p>
                        <h1>${post.title}</h1>
                        <p>${post.paragraph}</p>
                    </div>
                </div>
            `
        } else {
            posts += `
                <div class="post-description" id=${index}>
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

function ReadPost(postID) {
    let postToRead = data.find((post, index) => post[index] === postID)
    console.log(postToRead);
}
