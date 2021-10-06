const container = document.querySelector('.container');
let limit = 4;
let pageCount =1;
let postCount = 1;

const getPost = async () => {
const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
const data = await response.json();
data.map((curElm)=>{
 const htmlData = `<div class="posts">
 <p class="post-id">${postCount++}</p>
<h2 class="title">${curElm.title}</h2>
<p class="post-info"> ${curElm.body}</p></div>`
container.insertAdjacentHTML('beforeend',htmlData);
})
}
getPost()
// function getRandNum(){
//     return Math.floor(Math.random() * 100);
// }

// function loadImage(numImage = 10){
//     let i=0;
//     while(i< numImage){
//         const img = document.createElement('img');
//         img.src = `${URL}${getRandNum()}`;
//         container.appendChild(img);
//         i++;
//     }
// }

// loadImage();
const showData = () => {
    pageCount++;
    getPost();
};

window.addEventListener('scroll',() =>{
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight){
        showData();
    }

});