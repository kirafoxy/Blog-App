// лента с новыми постами будет растрорятся после 4 постов
// фоном будет картинка темная

const posts = [];
const TITLE_VALIDATION_LIMIT = 50;
const TEXT_VALIDATION_LIMIT = 350;
const POST_LIMIT_FOR_LIST = 2;


const titleInputNode = document.querySelector('.js-input-title-post');
const textPostInputNode = document.querySelector('.js-input-post-text');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');
const validationMessage = document.querySelector('.validationMessage');
// const validationMessage = document.getElementById('validationMessage'); поиск элемента по id 
const ta = document.querySelector('.counte-input')
const counter = document.querySelector('.counter-text__current')

const clearBtnNode = document.querySelector('.js-clear-btn');

ta.addEventListener('input', onInput)

function onInput(evt){
    const length = evt.target.value.length
    counter.innerText = length
}


newPostBtnNode.addEventListener('click', function() {

    const postFromUser = getPostFromUser();

    addPost(postFromUser);
    
    renderPosts();

});




// сделать кнопку не активной при превышении колличества символов 

// titleInputNode.addEventListener("input", function(event){
//     const currentValue = event.target.value;

//     if(currentValue.length > TITLE_VALIDATION_LIMIT ) {

//         validationMessage.innerText = `Длина заголовка не должна превышать 
//         ${TITLE_VALIDATION_LIMIT} символов!`

//         validationMessage.classList.remove("validationMessage_hidden");
//     } else {
//         validationMessage.classList.add("validationMessage_hidden");
//     }
// });

// textPostInputNode.addEventListener("input", function(event){
//     const currentValue = event.target.value;

//     if(currentValue.length > TEXT_VALIDATION_LIMIT ) {

//         validationMessage.innerText = `Длина текста не должна превышать 
//         ${TEXT_VALIDATION_LIMIT} символов!`

//         validationMessage.classList.remove("validationMessage_hidden");
//     } else {
//         validationMessage.classList.add("validationMessage_hidden");
//     }
// })  вариант как работать через event.target 

titleInputNode.addEventListener("input", validation);

textPostInputNode.addEventListener("input", validation);


function validation(){
    const titleLen = titleInputNode.value.length;
    const textLen = textPostInputNode.value.length;

    if (titleLen > TITLE_VALIDATION_LIMIT ) {
        validationMessage.innerText = `Длина заголовка не должна превышать 
        ${TITLE_VALIDATION_LIMIT} символов!`
        validationMessage.classList.remove("validationMessage_hidden");
        return ;  
    }

    if (textLen > TEXT_VALIDATION_LIMIT ) {
    validationMessage.innerText = `Длина текста не должна превышать 
    ${TEXT_VALIDATION_LIMIT} символов!`
    validationMessage.classList.remove("validationMessage_hidden");
    return ;
    }
    validationMessage.classList.add("validationMessage_hidden");
}


function getPostFromUser() {
    const title = titleInputNode.value;
    const text = textPostInputNode.value;
    return {
        title: title,
        text: text
    };

}


function addPost({title, text}) {
    const currentDate = new Date();
    const dt = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    posts.push({
        dt,
        title,
        text
    })

}
function getPosts() {
    return posts;
}

function renderPosts() {
    const posts = getPosts();
    
    let postsHTML = "";

    posts.forEach(post => {
        postsHTML += 

        `   <div class="post">
            
            <p class="post__title"> ${post.title}</p>
            <p class="post__text"> ${post.text} </p>
            <p class="post__date"> ${post.dt}</p>
        
            </div>`;
    });

    postsNode.innerHTML = postsHTML;
}
