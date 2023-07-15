const btncart = document.querySelector(".container-icon")
const containercartproducts = document.querySelector('icon-cart')



btncart.addEventListener('click' ,() => {

    containercartproducts.classList.toggle('container-cart-products-hidden-cart')
    
})