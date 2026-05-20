import { menuArray } from './data.js'

const menu = document.getElementById ('menu-div')
const modalDiv = document.getElementById('modal')
const cartDiv = document.getElementById('cart')

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

function addToCart(itemId){
    // find item in menu with same id as button
    for (let item of menuArray) {
        if ((item.id == itemId) && (!item.inCart)) {
/*            
            console.log('item obj: ' + item)
            console.log('item obj name: ' + item.name)
            console.log('item obj id: ' + item.id)
            console.log('item obj price: ' + item.price)
            */

           // check if item is alr in cart
           item.inCart = true
           
           
           // add name/price to cart html
            cartDiv.innerHTML += `

                <div class='cart-item'>
                    <h2 class='cart-item-name'>
                        ${item.name}
                    </h2>

                    <button class='removeBtn' data-remove='${item.id}'>
                        remove
                    </button>

                    <h3 class='cart-item-price'>
                        $${item.price}
                    </h3>

                </div>
            

            `
          
        }
    }
}

function removeFromCart(itemId) {
    for (let item of menuArray) {
        if ((item.id == itemId) && (item.inCart)) {
            item.inCart = false

        }
    }

}

// Start the DOM
renderMenu()



// menu items add to order function
//  function addToOrder
// once there is items in the cart
//  function footerTotals
// once the submit order is done
//  modal
//  render modal ?? change remove isHidden class using classList
const renderModal = () =>  modalDiv.classList.remove('isHidden')
const hideModal = () => modalDiv.classList.add('isHidden')
// once pay button clicked footerSuccess()

