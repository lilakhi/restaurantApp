import { menuArray } from './data.js'

const menu = document.getElementById ('menu-div')
const modalDiv = document.getElementById('modal')
const cartDiv = document.getElementById('cart')
const cartTotalDiv = document.getElementById('cart-total')
let cartArr = []

/*
            <div class="item">
                <p class="emoji">🧃</p>
                <div class="item-info">
                    <h2 class="name">
                        juice
                    </h2>
                    <h3 class="ingredients">
                        water, fruit, sugar
                    </h3>
                    <h3 class="price">
                        $34
                    </h3>
                </div>
                <button class="add-button">+</button>
            </div>   
*/

document.addEventListener ('click', (e) => {

    if (e.target.dataset.itemId) {addToCart(e.target.dataset.itemId)}
    if (e.target.dataset.remove) {removeFromCart(e.target.dataset.remove)}
    if (e.target.id == 'submit-btn') {renderModal()}
    if (e.target.id == 'pay-btn') {
        hideModal()
        footerSuccess()
    }
})


function renderMenu(){
    for (let item of menuArray) {
        menu.innerHTML += `
            <div class="item">
                <p class="emoji">${item.emoji}</p>
                <div class="item-info">
                    <h2 class="name">
                        ${item.name}
                    </h2>
                    <h3 class="ingredients">
                        ${item.ingredients}
                    </h3>
                    <h3 class="price">
                        $${item.price}
                    </h3>
                </div>
                <button class="add-button" data-item-id="${item.id}">+</button>
            </div>   

        
        `
    }
}

const renderCart = (items = cartArr) => {
    cartDiv.innerHTML = items.join('')

//ONLY IF cartArr IS NOT EMPTY
    if (cartArr.length > 0) {    
//empty array for the new render. add only prices of items in cart.
        let itemPrices = []
// iterate over menuArray for any items 'inCart'
        for (let item of menuArray) {
            if (item.inCart) {
// add the price to 'itemPrices'
                itemPrices.push(item.price)
            }
        }
        const itemsTotal = itemPrices.reduce((totalPrice, currentPrice) => totalPrice + currentPrice)


        cartDiv.innerHTML += `
            
            <div id='cart-total'>
                <h2 class="name" id="your-total">
                    Total Price:
                </h2>

                <h3 class="price">
                    $${itemsTotal}
                </h3>
            </div>
            
            <button id="submit-btn">Submit Order</button>
        `


    } else {cartDiv.innerHTML = ``}

}

function addToCart(itemId){
// find item in menu with same id as button
    for (let item of menuArray) {
        if ((item.id == itemId) && (!item.inCart)) {


// check if item is alr in cart
            item.inCart = true
           
           
// add name/price to cart html
            cartArr.unshift( `

                <div class='cart-item'>
                    <h2 class='cart-item-name'>
                        ${item.name}
                    </h2>

                    <button class='removeBtn' data-remove='${item.name}'>
                        remove
                    </button>

                    <h3 class='cart-item-price'>
                        $${item.price}
                    </h3>

                </div>
            

            `)

            renderCart()

        }
    }
}



function removeFromCart(itemName) {

// set the inCart value to false to be reAdded
    for (let item of menuArray) {
        if (item.name == itemName) {
            item.inCart = false
        }
    }

// remove the item from the cart
    for (let item of cartArr) {
        if (item.includes(itemName)){
// remove the item at the indexOf(item) of cartArr                       
            cartArr.splice((cartArr.indexOf(item)), 1)
        }
    }

// render the cart again to show changes

    renderCart()

}




//  modal
function renderModal() { modalDiv.classList.remove('isHidden') }
function hideModal() { modalDiv.classList.add('isHidden') }


// once pay button clicked footerSuccess()

function footerSuccess() {
    document.getElementById('footer').innerHTML = `
    
        <div id='success-page'>
            <p id='success-msg'>
                Thanks ((NAME_INPUT))! Your order is coming soon!
            </p>
        </div>

    `
}

// Start the DOM
renderMenu()



