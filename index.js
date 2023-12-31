import data from './data.js'

const heroEl = document.getElementById('hero')
const bodyEl = document.getElementById('body')
const postEl = document.getElementById('posts')
const morePostsEl = document.getElementById('morePosts')
const viewMoreEl = document.getElementById('showMore')

/////////////////////////////LISTENERS///////////////////////////

//renderizamos en el front los posts recibidos
document.addEventListener('DOMContentLoaded', () => {
    //console.log(data);
    let hero = ''
    let posts = ''
    data.map((post) => {
        //post principal (HERO)
        if(post.index === 0){
            hero += `
                <div class="hero" id="${post.index}" onclick="leerPost(${post.index})">
                    <img src=${post.urlImage} class="hero-img">
                    <div class="hero-description">
                        <p class="hero-date">${post.date}</p>
                        <h1>${post.title}</h1>
                        <p class="hero-info">${post.paragraph}</p>
                    </div>
                </div>
            `
        } 
        // 3 posts activos
        else if (post.index > 0 && post.index <= 3) {
            posts += `
                <div class="post-description" id=${post.index} onclick="leerPost(${post.index})">
                    <img class="post-img" src=${post.urlImage}>
                    <p class="post-date">${post.date}</p>
                    <h1>${post.title}</h1>
                    <p class="post-info" >${post.paragraph}</p>
                </div>
            `
        }
    })
    //console.log(hero);
    //console.log(posts);
    heroEl.innerHTML = hero
    postEl.innerHTML = posts
})

//renderizamos 3 posts más
viewMoreEl.addEventListener('click', function(){
    showMore()
})

bodyEl.addEventListener('resize', applyGridSistem())

/////////////////////////////FUNCTIONS///////////////////////////

//mostramos mas posts al hacer click en "view more"
function showMore(){
    let morePosts = ''
    data.map((post) => {
        if(post.index > 3) {
            morePosts += `
                <div class="post-description" id=${post.index} onclick="leerPost(${post.index})">
                    <img class="post-img" src=${post.urlImage}>
                    <p class="post-date">${post.date}</p>
                    <h1>${post.title}</h1>
                    <p class="post-info">${post.paragraph}</p>
                </div>
            `
        }
        morePostsEl.innerHTML = morePosts
    })
}
function applyGridSistem() {
    let size = window.innerWidth
    console.log(size);
    if(window.innerWidth > 650) {
        postEl.classList.add('grid')
        morePostsEl.classList.add('grid')
    } else {
        postEl.classList.remove('grid')
        morePostsEl.classList.remove('grid')
    }
}


