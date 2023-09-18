import data from './data.js'

const selectedPostEl = document.getElementById('postToRead')
const recentsEl = document.getElementById('recents')
const bodyEl = document.getElementById('body')

document.addEventListener('DOMContentLoaded', () => {
    //obtenemos el id de la noticia desde la url
    let postUrl = new URLSearchParams(window.location.search)
    let id = postUrl.get("id")
    //console.log(id)
    let postToRender = ''
    let posts = ''
    //buscamos el post en nuestra db (data.js)
    let selectedPost = data.find((post) => post.index === Number(id))
    //console.log(selectedPost);
    if(selectedPost){
        postToRender = `
            <div class="selected-post-description" id=${selectedPost.index}>
                <p class="post-date">${selectedPost.date}</p>
                <h1>${selectedPost.title}</h1>
                <p>${selectedPost.paragraph}</p>
                <img src=${selectedPost.urlImage}>
                <h4>${selectedPost.description.title1}</h4>
                <p>${selectedPost.description.paragraph1}</p>
                <h4>${selectedPost.description.title2}</h4>
                <p>${selectedPost.description.paragraph2}</p>
            </div>
        `
    } else {
        postToRender = `
            <div class="post-description">
                <h1>error 404 | post not found :(</h1>
            </div>
        `
    }
    //mapeamos la db para mostrar los "recent posts"
    data.map((post) => {
        if(post.index != selectedPost.index && post.index <= 3) {
            posts += `
                <div class="post-description" id=${post.index} onclick="leerPost(${post.index})">
                    <img class="post-img" src=${post.urlImage}>
                    <p class="post-date">${post.date}</p>
                    <h1>${post.title}</h1>
                    <p>${post.paragraph}</p>
                </div>
            `
        }
})
    selectedPostEl.innerHTML = postToRender
    recentsEl.innerHTML = posts
})

bodyEl.addEventListener('resize', applyGridSistem())

function applyGridSistem() {
    let size = window.innerWidth
    console.log(size);
    if(window.innerWidth > 650) {
        recentsEl.classList.add('grid')
    } else {
        recentsEl.classList.remove('grid')
    }
}