function appendJS(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerHTML = '마지막 자식'

    ul.append(li)
}
function appendJquery(){
    $('.colors').append('<li> jquery 자식추가 <li>')
}
function prependJS(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerHTML = '첫 자식'

    ul.prepend(li)

}
function prependJquery(){
    $('.colors').prepend('<li> jquery 자식추가 <li>')

}

function beforeJs(){
   let green = document.querySelector('.green')
   let li = document.createElement('li')
   li.textContent='이전 형제'
   green.before(li)
}

function beforeJquery(){
    $('.green').before('<li>이전 형제로 추가</li>')
}

function afterJs(){
   let navy = document.querySelector('.navy')
   let li = document.createElement('li')
   li.textContent='다음 형제'

   navy.before(li)
}
function afterJquery(){
    $('.navy').after('<li>다음 형제로 추가</li>')
}

function removeJs(){
   let li = document.querySelector('#li2')
   li.remove()
}
function removeJquery(){
  $('#li2').remove()
}
function emptyJs(){
    let ul=document.querySelector('.nums')
    //자바스크립트는 empty()가 존재하지 않음.
    ul.innerHTML=''
}
function emptyJquery(){
    $('.num').empty()
}