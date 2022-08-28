const menuButton = document.querySelector(".menu-btn");
const closeButton = document.querySelector(".close-btn");
const linksMenu = document.querySelector(".header .links");
const linkseffect = document.querySelectorAll(".header .links a")
const header = document.querySelector(".header")
// show menu in screen mobile 
menuButton.addEventListener("click", () => {
    linksMenu.style.transform = "translateX(0)"
});
closeButton.addEventListener("click", () => {
    linksMenu.style.transform = "translateX(100%)"
});
// links effect 
linkseffect.forEach((link) => {
    link.addEventListener("click", (e) => {
        linkseffect.forEach((link) => {
            link.classList.remove("active")
        })
        e.target.classList.add("active")
    })
});

window.onscroll = () => {
    if (window.scrollY > 72) {
        header.classList.add("show-shadow")
    } else {
        header.classList.remove("show-shadow")
    }
}

// slidre croswell
const nextBtn = document.querySelector(".arrival .next")
const prevBtn = document.querySelector(".arrival .prev")
const sliderLenght = document.querySelectorAll(".arrival .cart-container .cart").length
const cartContainer = document.querySelector(".arrival .cart-container")

let currentDown = 0;
let lenght = sliderLenght - 4;

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        currentDown++
        if (currentDown > lenght) {
            cartContainer.style.transform = `translateX(0px)`
            currentDown = 0;
        } else {
            cartContainer.style.transform = `translateX(${currentDown * -290}px)`
            prevBtn.classList.remove("disable")
        }
    })
}
if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        currentDown--
        if (currentDown < 0) {
            cartContainer.style.transform = `translateX(0px)`
            currentDown = 0
            prevBtn.classList.add("disable")
        } else {
            cartContainer.style.transform = `translateX(${currentDown * -290}px)`
        }
    })
}

// shop page 
const productsShop = document.querySelector(".products-shop")
const cartShop = document.querySelectorAll(".products .shop")
cartShop.forEach((cart) => {
    cart.addEventListener("click", () => {
        let imgUrl = cart.children[0].src
        productsShop.innerHTML = ""
        let addCart = document.createElement("div")
        addCart.className = "add-cart"
        addCart.innerHTML = `<div class="container">
        <div class="cart-img">
            <img src="${imgUrl}" alt="">
            <div class="imgs">
                <img src="./image/products/f2.jpg" alt="">
                <img src="./image/products/f3.jpg" alt="">
                <img src="./image/products/f4.jpg" alt="">
                <img src="./image/products/f5.jpg" alt="">
            </div>
        </div>
        <div class="cart-data">
            <h4>Home/T-Shirts</h4>
            <h2>Men's Fashion T-Shirts</h2>
            <h3>$130.00</h3>
            <div class="select">
                <select>
                    <option value="0">Select Size</option>
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">L</option>
                    <option value="4">XL</option>
                </select>
            </div>
            <form action="shopping.html" class="number">
                <input type="number" value="1" min="0" max="10">
                <input type="submit" class="add-cart-btn" value="Add To Cart">
            </form>
            <h2>Product Details</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ipsam! Perferendis necessitatibus
                dolor ducimus quae, quaerat animi reiciendis deserunt, quo molestias, dolorem veritatis numquam
                aliquam consequatur fuga perspiciatis eum maiores?</p>
             </div>
        </div>`
        let featured = document.createElement("div")
        featured.className = "feature"
        featured.innerHTML = `<div class="container">
        <div class="title">
            <h1>Featured Products</h1>
            <p>Summer Collection New Modern Design</p>
        </div>
        <div class="cart-container">
            <div class="cart">
                <img src="./image/products/f1.jpg" alt="">
                <div class="cart-info">
                    <h5>adidas</h5>
                    <h4>Carton Astronout T-Shirts</h4>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="price">
                        $70.00
                    </span>
                    <div class="cart-shop">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
            <div class="cart">
                <img src="./image/products/f2.jpg" alt="">
                <div class="cart-info">
                    <h5>adidas</h5>
                    <h4>Carton Astronout T-Shirts</h4>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="price">
                        $70.00
                    </span>
                    <div class="cart-shop">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
            <div class="cart">
                <img src="./image/products/f3.jpg" alt="">
                <div class="cart-info">
                    <h5>adidas</h5>
                    <h4>Carton Astronout T-Shirts</h4>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="price">
                        $70.00
                    </span>
                    <div class="cart-shop">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
            <div class="cart">
                <img src="./image/products/f4.jpg" alt="">
                <div class="cart-info">
                    <h5>adidas</h5>
                    <h4>Carton Astronout T-Shirts</h4>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <span class="price">
                        $70.00
                    </span>
                    <div class="cart-shop">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
    
            </div>
            </div>`
        productsShop.appendChild(addCart)
        productsShop.appendChild(featured)
        let FirstImg = document.querySelector(".cart-img>img")
        let imgSlider = document.querySelectorAll(".cart-img .imgs img")
        if (imgSlider) {
            imgSlider.forEach((el) => {
                el.addEventListener("click", () => {
                    let imgSrc = el.src
                    FirstImg.src = imgSrc
                })
            })
        }
        // add your commdity in cart shopping
        addCartInshopping(addCart)
    })



})

// add map location 
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 36.1667, lng: 1.3333 },
        zoom: 8
    });
}

// remove commdity from cart shopping 
function removeCart() {
    let removeBtn = document.querySelectorAll(".commodity .remove")
    console.log(removeBtn)

    removeBtn.forEach((remove) => {
        remove.addEventListener("click", () => {
            remove.parentElement.remove()
        })
    })
}
removeCart()
// add your commdity in cart shopping






function addCartInshopping(cart) {
    let addCartButton = cart.querySelector(" .number .add-cart-btn");

    let pro = document.querySelector(".products")

    addCartButton.addEventListener("click", (e) => {
        let imgSrc = cart.querySelector(" .cart-img>img").src;
        let NumberCommidity = cart.querySelector(" .number input").value;
        let commdity = document.createElement("div")
        commdity.className = "commodity"
        commdity.innerHTML = `<div class="remove">
        <i class="fa-solid fa-xmark" id="remove-commodity"></i>
    </div>
    <div class="image-commodity">
        <img src="${imgSrc}" alt="">
    </div>
    <div class="type-commodity">
        <p>Carton T-Short</p>
    </div>
    <div class="price-commodity">
        <span>$120.00</span>
    </div>
    <div class="quantity-commodity">
        <input type="Number" value="1" min="1" max="10">
    </div>
    <div class="total-price">
        <span>$120.00</span>
    </div>`
        localStorage.setItem("commidityData", JSON.stringify(commdity.outerHTML))
    })


}

// console.log(localStorage.getItem("commidityData"))