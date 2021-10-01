const slides = document.querySelectorAll('.slide')

const navButton = document.querySelector("button")

navButton.addEventListener("click", () =>{
    document.querySelector("nav").classList.toggle("active")
})

var activeIndex = 0

document.querySelectorAll(".prev").forEach((prev)=>{
    prev.addEventListener('click', ()=>{
        if( activeIndex === 0){
            activeIndex = slides.length-1
            toggle()
        } else{
            activeIndex-=1
            toggle()
        }
    })
})

document.querySelectorAll(".next").forEach((nex)=>{
    nex.addEventListener('click', ()=>{
        if( activeIndex === slides.length-1){
            activeIndex = 0
            toggle()
        } else{
            activeIndex+=1
            toggle()
        }
    })
})

function toggle(){
    document.querySelector(".active").classList.remove("active")
    slides[activeIndex].classList.add("active")
}
