import { menuArray } from './data.js'

const menu = document.getElementById ('menu-div')

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
                <button class="add-button">+</button>
            </div>   

        
        `
    }
}

renderMenu()