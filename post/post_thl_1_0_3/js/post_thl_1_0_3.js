const post_thl_1_0_3__promoBtn = document.getElementsByClassName('post_thl_1_0_3__promoBtn')

for (let i = 0; i < post_thl_1_0_3__promoBtn.length; i++) {
    post_thl_1_0_3__promoBtn[i].addEventListener('click', () => {
        document.getElementsByClassName('post_thl_1_0_3__promoAcc')[i]
    })
}