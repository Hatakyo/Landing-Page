let productIndex = 0;


let productInfos = document.querySelectorAll('.product-info')

setTimeout(() => {
    productInfos[productIndex].classList.add('active')
}, 200)

let isSliding = false

slide = () => {
    if (isSliding) return

    isSliding = true

    let currProduct = document.querySelector('.product-info.active')
    currProduct.classList.remove('active')

    productIndex = productIndex + 1 > productInfos.length - 1 ? 0 : productIndex + 1
    productInfos[productIndex].classList.add('active')

    // img slide

    let listItems = document.querySelectorAll('.slider')
    let lists = document.querySelector('.slider-main')

    let reverseIteams = Array.from(listItems).slice().reverse()

    left = reverseIteams[0].offsetLeft + 'px'
    height = reverseIteams[0].offsetHeight + 'px'
    width = reverseIteams[0].offsetWidth + 'px'
    zIndex = reverseIteams[0].style.zIndex

    reverseIteams.forEach((el, index) => {
        if (index < listItems.length - 1) {
            el.style.left = reverseIteams[index + 1].offsetLeft + 'px'
            el.style.height = reverseIteams[index + 1].offsetHeight + 'px'
            el.style.width = reverseIteams[index + 1].offsetWidth + 'px'
            el.style.zIndex = reverseIteams[index + 1].style.zIndex
            el.style.transfrom = 'unset'
            el.style.opacity = 1
        }

        if (index == listItems.length - 1) {
            el.style.transfrom = 'scale(1.5)'
            el.style.opacity = '0'


            let cln = el.cloneNode(true)

            setTimeout(() => {

                el.remove()

                cln.style.transfrom = 'scale(0)'
                cln.style.left = left
                cln.style.height = height
                cln.style.width = width
                cln.style.opacity = '0'
                cln.style.zIndex = '0'
                cln.style.animation = 'unset'

                lists.appendChild(cln)

                isSliding = false
            }, 1000);
        }
    })


}

let slideControl = document.querySelector('.slide-control')

slideControl.onclick = () => {
    slide()
}
openNav = () => {
    let nav = document.querySelector('.nav-overlay')

    nav.classList.toggle('active')

    let bar = document.querySelector('.bar')

    bar.classList.toggle('active')
}