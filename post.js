import data from './data.js'

const selectedPostEl = document.getElementById('postToRead')
const recentsEl = document.getElementById('recents')

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
                <img class="post-img" src=${selectedPost.urlImage}>
                <h4>${selectedPost.description.title1}</4>
                <p>${selectedPost.description.paragraph1}</p>
                <h4>${selectedPost.description.title2}</4>
                <p>${selectedPost.description.paragraph2}</p>
            </div>
        `
    } else {
        postToRender = `
            <div class="post-description">
                <img class="post-img" src='./assets/avatar.png'>
                <h1>error 404 | post not finded :(</h1>
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



/* `<div class="post-description">
<img class="avatar-img" src='./assets/avatar.png'>
<h1>Hi there! My name is Roku and welcome to my learning journal.</h1>
<p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
<p>
<h4>How I stay committed to learning</h4>
I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.<br>
<br>
While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.<br>
<h4>How I got started</h4>
I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.<br>
<br>
That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
</div>` */