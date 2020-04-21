
// Global button variables && counter
let counter = document.getElementById('counter')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')
let likes = document.querySelector('.likes')
let cfForm = document.getElementById('comment-form')
// define interval for global scope
let interval

// pause flag
let paused = false

// create comment list
let commentList = document.createElement('ul')
commentList.id = 'commentList'
let list = document.getElementById('list')
list.appendChild(commentList)

// start timer on page load
document.addEventListener("DOMContentLoaded", function() {
    interval = setInterval(incrementCounter, 1000)
});

function incrementCounter() {
    let num = parseInt(counter.innerHTML) + 1
    counter.innerHTML = num
     
}

function increment(element) {
    let num = parseInt(element.innerHTML) + 1
    counter.innerHTML = num
}

function decrement(element) {
    let num = parseInt(element.innerHTML) - 1
    counter.innerHTML = num
}


function like() {
    let num = parseInt(counter.innerHTML)
    let element = document.getElementById(num.toString())
    if (element) {
        count = parseInt(element.class)
        element.innerHTML = `${element.id} was liked ${count + 1} times`
    }
    else {
    let l = document.createElement('li')
    l.id = num
    l.class = 1
    l.innerHTML = `${num} was liked ${l.class} time`
    likes.appendChild(l)
    }
}

plus.addEventListener("click", function(e) {
   increment(counter)
})

minus.addEventListener("click", function(e) {
    decrement(counter)
})

heart.addEventListener("click", function(e){
    like()
})

pause.addEventListener("click", function(e){
    if(paused) {
        pause.innerHTML = "pause"
        interval = setInterval(incrementCounter, 1000)
        paused = false
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        document.getElementById('submit').disabled = false
    } else {
        paused = true
        clearInterval(interval)
        pause.innerHTML = "resume"
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        document.getElementById('submit').disabled = true
        


    }
})

cfForm.addEventListener("submit", function(e){
    // need for form submission and not full page reset
    e.preventDefault()
    let li = document.createElement('li')
    li.innerHTML = document.getElementById('comment-input').value
    commentList.appendChild(li)
    //reset button
    e.target.reset()
})


