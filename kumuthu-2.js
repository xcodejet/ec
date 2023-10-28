const scrolling = (index) => {
    window.scrollBy(0, window.innerHeight*index);
}
const closeHead = () => {
    document.getElementsByClassName("header")[0].style.marginLeft = "100%"
}
let lite = true
const theme = () => {
    if(lite){
        darkmode.style.display = "none"
        litemode.style.display = "block"
        themecss.href = "./dark-mode-0.css"
        lite = false
    }else{
        litemode.style.display = "none"
        darkmode.style.display = "block"
        themecss.href = "./lite-mode-0.css"
        lite = true
    }
}