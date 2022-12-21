menuButtonEvent()
function menuButtonEvent(){
    const menuButton = document.querySelector(".nav-bar-button")
    const menuContent = document.querySelector(".nav-bar-container")
    let onOff = false;
    menuButton.addEventListener('click', (event) => {
        if(onOff === true){
            onOff = false
            menuButton.textContent = "sort"
            menuContent.style.display = "none"
        } else {
            onOff = true
            menuButton.textContent = "close"
            menuContent.style.display = "block"
        }
    });
}