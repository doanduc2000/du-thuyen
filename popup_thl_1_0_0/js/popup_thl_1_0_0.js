const popUp = document.getElementsByClassName('popup-btn')
for (let i = 0; i < popUp.length; i++) {
    popUp[i].addEventListener('click', () => {
        document.getElementById('popup_thl_1_0_0').style.display = 'flex'
    })

}
window.onclick = function(e) {
    if (e.target == document.getElementById('popup_thl_1_0_0')) {
        document.getElementById('popup_thl_1_0_0').style.display = 'none'
    }
}
document.getElementById('popup-close').addEventListener('click', () => {
    document.getElementById('popup_thl_1_0_0').style.display = 'none'
})