const post_thl_1_0_3__promoBtn = document.getElementsByClassName('post_thl_1_0_3__promoBtn')
const post_thl_1_0_3__promoAcc = document.getElementsByClassName('post_thl_1_0_3__promoAcc')

for (let i = 0; i < post_thl_1_0_3__promoBtn.length; i++) {
    post_thl_1_0_3__promoBtn[i].addEventListener('click', () => {
        if (post_thl_1_0_3__promoAcc[i].style.display !== 'block') {
            post_thl_1_0_3__promoAcc[i].style.display = 'block'
            post_thl_1_0_3__promoBtn[i].style.color = '#cf1515'
        } else {
            post_thl_1_0_3__promoAcc[i].style.display = 'none'
            post_thl_1_0_3__promoBtn[i].style.color = '#505050'
        }
    })
}