import data from './data.js'

const recentsEl = document.getElementById('recents')
const bodyEl = document.getElementById('body')

//renderizamos en el front los posts recientes
document.addEventListener('DOMContentLoaded', () => {
    //console.log(data);
    let posts = ''
    data.map((post) => {
            if(post.index > 0 && post.index <= 3) {
                posts += `
                    <div class="post-description" id=${post.index} onclick="leerPost(${post.index})">
                        <img class="post-img" src=${post.urlImage}>
                        <p class="post-date">${post.date}</p>
                        <h1>${post.title}</h1>
                        <p class="post-info">${post.paragraph}</p>
                    </div>
                `
            }
    })
    //console.log(hero);
    //console.log(posts);
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
