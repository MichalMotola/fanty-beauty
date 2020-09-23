// navbar
let hamburger = document.querySelector('.fa-bars')

let closenav = document.querySelector('.fa-times')

hamburger.addEventListener('click', openNav)



function openNav() {
    document.querySelector('#main_menu').classList.toggle('show')
    document.querySelector('.navigation_bar').classList.toggle('show')
}

let search = document.querySelector('#search')
let searchInput = document.querySelector('.search-line')
search.addEventListener('click', openSearch)

function openSearch() {
    searchInput.classList.toggle('active')
}

// שינוי תמונה
let imagearry = ["images/best11.png", "images/best22.png", "images/best33.jpg", "images/best44.png"]
let imagearry2 = ["images/best1.png", "images/best2.png", "images/best3.jpg", "images/best4.jpg"]

let imageBest = document.querySelectorAll('.Best')

for (let i = 0; i < imageBest.length; i++) {

    imageBest[i].addEventListener('mouseover', changeimage)
    imageBest[i].addEventListener('mouseout', changeimageback)


}

function changeimageback(e) {
    e.target.src = imagearry2[e.target.dataset.id - 1]

}

function changeimage(e) {
    e.target.src = imagearry[e.target.dataset.id - 1]

}
// פתיחה וסגירה של עגלת הקניות 
let modalCart = document.querySelector('.modal_cart')
let closenModalcart = document.querySelector('#close_bag')
let openModalcart = document.querySelector('#basket')

openModalcart.addEventListener('click', openModalcartFunc)
closenModalcart.addEventListener('click', openModalcartFunc)

function openModalcartFunc(e) {
    modalCart.classList.toggle('active')
}


// שינוי תמונה עמוד שני-1
let imageFarry = ["images/face11.png", "images/face22.png", "images/face33.png", "images/face44.png"]
let imageFarry2 = ["images/face1.jpg", "images/face2.png", "images/face3.png", "images/face4.png"]

let imageFace = document.querySelectorAll('.item')

for (let i = 0; i < imageFace.length; i++) {

    imageFace[i].addEventListener('mouseover', changeimageF)
    imageFace[i].addEventListener('mouseout', changeimagebackF)


}

function changeimagebackF(e) {
    e.target.src = imageFarry2[e.target.dataset.id - 1]

}

function changeimageF(e) {
    e.target.src = imageFarry[e.target.dataset.id - 1]

}
// שורה2
let facearry = ["images/face55.png", "images/face66.png", "images/face77.png", "images/face88.png"]
let facearry2 = ["images/face5.png", "images/face6.png", "images/face7.png", "images/face8.png"]

let makeup = document.querySelectorAll('.item1')

for (let i = 0; i < makeup.length; i++) {

    makeup[i].addEventListener('mouseover', changeimageMakeup)
    makeup[i].addEventListener('mouseout', changeimagebackMakeup)


}

function changeimagebackMakeup(e) {
    e.target.src = facearry2[e.target.dataset.id - 1]

}

function changeimageMakeup(e) {
    e.target.src = facearry[e.target.dataset.id - 1]

}
// שורה3
let facearry1 = ["images/face99.png", "images/face1010.png", "images/face1111.png", "images/face1212.png"]
let facearry12 = ["images/face9.png", "images/face10.png", "images/face111.png", "images/face12.png"]

let makeup1 = document.querySelectorAll('.item2')

for (let i = 0; i < makeup1.length; i++) {

    makeup1[i].addEventListener('mouseover', changeimageMakeup1)
    makeup1[i].addEventListener('mouseout', changeimagebackMakeup1)


}

function changeimagebackMakeup1(e) {
    e.target.src = facearry12[e.target.dataset.id - 1]

}

function changeimageMakeup1(e) {
    e.target.src = facearry1[e.target.dataset.id - 1]

}


ImagesColor = document.querySelectorAll(".image_color img")
Colors = document.querySelectorAll(".color img")
SquareColor = document.querySelectorAll(".square_color i")

for (let i = 0; i < SquareColor.length; i++) {

    SquareColor[i].addEventListener('click', changecolorimage)

}

function changecolorimage(e) {
    eventdataset = e.target.dataset.scolor
    console.log(eventdataset)

    for (let i = 0; i < ImagesColor.length; i++) {

        if (ImagesColor[i].dataset.image == eventdataset) {
            ImagesColor[i].style.display = "block"
        } else {
            ImagesColor[i].style.display = "none"

        }

    }
    for (let i = 0; i < Colors.length; i++) {

        if (Colors[i].dataset.color == eventdataset) {
            Colors[i].style.display = "block"
        } else {
            Colors[i].style.display = "none"

        }

    }


}

let counterInput = document.querySelector('.counter input')
let counterButton = document.querySelectorAll('.counter button')

for (let i = 0; i < counterButton.length; i++) {
    counterButton[i].addEventListener('click', plusminus)
}

function plusminus(event) {
    let value = event.target.value
    if (value == '+' && counterInput.value < 20) {

        counterInput.value++

    }
    if (value == '-' && counterInput.value > 0) {
        counterInput.value--
    }

}

//הוספה לסל
let cartbutton = document.querySelector('.buttonadd button');
let products = {

    18: {
        name: "PRO FILT'R HYDRATING LONGWEAR FOUNDATION Sale",
        price: 39,
        inCart: 0,
        tag: "1"
    }

}

if (cartbutton) {
    cartbutton.addEventListener('click', () => {
        cartNumbers(products[cartbutton.dataset.productid])
        totalCost(products[cartbutton.dataset.productid])
    })

}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.inmodal').textContent = productNumbers
    }
}

function cartNumbers(product) {
    let qnt = Number(document.querySelector('.Pcount').value);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + qnt)
        document.querySelector('.inmodal').textContent = productNumbers + qnt
    } else {
        localStorage.setItem('cartNumbers', qnt)
        document.querySelector('.inmodal').textContent = qnt
    }

    setItem(product)

}

function setItem(product) {
    let qnt = Number(document.querySelector('.Pcount').value);
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += qnt
    } else {
        product.inCart = qnt;
        cartItems = {
            [product.tag]: product
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

function totalCost(product) {
    let qnt = Number(document.querySelector('.inmodal').innerHTML);

    let cartCost = localStorage.getItem('totalCost')

    if (cartCost != null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost", qnt * product.price)
        document.querySelector(".totalprice").innerHTML = ''
        displayCart()
    } else {
        localStorage.setItem("totalCost", qnt * product.price)
        displayCart()
    }
}


function displayCart() {
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector(".content-cart")
    let Payments = document.querySelector(".totalprice")
    let cartCost = localStorage.getItem('totalCost')

    if (cartItems && productContainer) {
        productContainer.innerHTML = ''
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        <div class ="product-item">
        <div class = "image">
        <img src="/products/${item.tag}.jpg" width="100" alt="">
        </div>
        <div class="description">
        <div class="title">${item.name}</div>
        <div class="Price">Price: $${item.price}</div>
        <div class="Quantity">Quantity: ${item.inCart}</div>
        </div>
        </div>
        `
        })
        Payments.innerHTML += `
      <div class ="BasketTotalContainer">
      <h4 class="basketTotalTitel">
      Total price:
      </h4>
      <h4 class="BasketTotal">
      $${cartCost}.00
      </h4>

      </div>
      `
        document.querySelector('.inmodal').style.display = "block"
        document.querySelector('.clearall').style.display = "block"
    }
}

items = localStorage.getItem("productsInCart")

if (items) {
    displayCart()
}
onLoadCartNumbers()

let deleteitms = document.querySelector('.clearall')

deleteitms.addEventListener('click', removeitems)

function removeitems() {
    localStorage.clear()
    document.querySelector(".content-cart").innerHTML = ''
    document.querySelector(".totalprice").innerHTML = ''
    document.querySelector(".inmodal").innerHTML = '0'
    document.querySelector('.inmodal').style.display = "none"
    document.querySelector('.clearall').style.display = "none"
}

if (document.querySelector('.inmodal').innerHTML == "0") {
    document.querySelector('.inmodal').style.display = "none"
    document.querySelector('.clearall').style.display = "none"

}