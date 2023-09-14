import data from './data.js'

const recentsEl = document.getElementById('recents')

//renderizamos en el front los posts recientes
document.addEventListener('DOMContentLoaded', () => {
    //console.log(data);
    let posts = ''
    data.map((post) => {
            if(post.index > 0 && post.index <= 3) {
                posts += `
                    <div class="post-description" id=${post.index} onclick="leerPost(${post.index})">
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
    recentsEl.innerHTML = posts
})
