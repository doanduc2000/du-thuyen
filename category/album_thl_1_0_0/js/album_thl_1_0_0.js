const albumData = [{
    id: '1',
    img: 'images/album-1.jpg'
}, {
    id: '2',
    img: 'images/album-2.jpg'
}, {
    id: '3',
    img: 'images/album-1.jpg'
}, {
    id: '4',
    img: 'images/album-1.jpg'
}, {
    id: '5',
    img: 'images/album-1.jpg'
}, {
    id: '6',
    img: 'images/album-1.jpg'
}, {
    id: '7',
    img: 'images/album-1.jpg'
}, {
    id: '8',
    img: 'images/album-1.jpg'
}, {
    id: '9',
    img: 'images/album-1.jpg'
}, {
    id: '10',
    img: 'images/album-1.jpg'
}]


const albumModal = (data) => {
    const albumItem = data.map(item => {
        return `<div class="album_thl_1_0_0__item">
                <img width="820" height="440" src="${item.img}" alt="">
            </div>`
    })


    let newAlbumItem = ''
    for (let item of albumItem) {
        newAlbumItem += item
    }
    return ` <section class="album_thl_1_0_0" id="album_thl_1_0_0">
    <div class="album_thl_1_0_0__box" >
        <div class="album_thl_1_0_0__close" id="album_thl_1_0_0__close">
            <img width="20" height="20" src="images/album-close.svg" alt="">
        </div>
        <div class="album_thl_1_0_0__main">
            ${newAlbumItem}
        </div>
    </div>
    <div class="album_thl_1_0_0__bg" id="album_thl_1_0_0__bg"></div>
</section>`
}
document.getElementById('albumBtn').addEventListener('click', () => {
    document.getElementsByTagName('body')[0].insertAdjacentHTML("afterbegin", albumModal(albumData))
    document.getElementById('album_thl_1_0_0__close').addEventListener('click', () => {
        document.getElementById('album_thl_1_0_0').remove()
    })
    document.getElementById('album_thl_1_0_0__bg').addEventListener('click', () => {
        document.getElementById('album_thl_1_0_0').remove()
    })

})