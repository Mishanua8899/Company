let headerLink = document.getElementById('link1')
let offersLink = document.getElementById('link2')
let footerLink = document.getElementById('link3')
let footer = document.getElementsByTagName('footer')
const target = document.querySelector('#elem')
footerLink.addEventListener('click', function (e) {
    e.preventDefault()
    window.scrollTo({
        behavior:'smooth',
        top:600,
        left:0
    })
})
headerLink.addEventListener('click', function(e){
    e.preventDefault()
    window.scrollTo({
        behavior:'smooth',
        top:170
    })
})

offersLink.addEventListener('click', function(e) {
    e.preventDefault()
    window.scrollTo({
        behavior:'smooth',
        top:500
    })
})

target.addEventListener('click', function(e){
    e.preventDefault()
    console.log(e.target.innerText)
    window.scrollTo({
        behavior:'smooth',
        top:0,
    })
})

const options = {
    threshold:0.5,
    rootMargin:'-5px',
}

const observer = new IntersectionObserver(Callback, options)
observer.observe(target)

function Callback(){
        if(target.isIntersecting)
        console.log('working')
        target.classList.add('move')
        
}

const options2 = {
    threshold:0,
    rootMargin:'-300px',
}

const section = document.querySelector('#section')
const observer2 = new IntersectionObserver(Callback2, options)
observer2.observe(section)

function Callback2() {
    if(section.isIntersecting)
    console.log('working')
    section.classList.add('aha')
    
}


