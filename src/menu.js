export default function menu() {
    const content = document.getElementById('content')
    content.innerHTML = ''
    
    const headline = document.createElement('h2')
    const image = document.createElement('img')
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menu')

    headline.textContent = 'Menu'
    image.src = 'https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?t=st=1651647562~exp=1651648162~hmac=1032a7526c3c730d1cab48700282bf1233beb91222f7969c37f23c3b9c2a43e7&w=996'

    function createMenuItem(imglink, itemdescription, itemnum){

        let itemCard = document.createElement('div')
        let imgContainer = document.createElement('div')
        let itemImg = document.createElement('img')
        let itemDesc = document.createElement('p')

        itemCard.classList.add('itemcard')
        imgContainer.classList.add('imgcontainer')
        itemCard.id = `itemcard${itemnum}`
        itemImg.id = `itemimg${itemnum}`
        itemDesc.id = `itemdesc${itemnum}`

        itemImg.src = imglink
        itemDesc.textContent = itemdescription

        imgContainer.appendChild(itemImg)

        itemCard.appendChild(itemDesc)
        itemCard.appendChild(imgContainer)

        menuDiv.appendChild(itemCard)
    }

    createMenuItem('https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900', 'Chicken Fried', 0)
    createMenuItem('https://simply-delicious-food.com/wp-content/uploads/2020/06/Sticky-BBQ-ribs-3.jpg', 'BBQ Ribs', 1)
    createMenuItem('https://bsstatic2.mrjack.es/wp-content/uploads/2020/09/hamburguesa-bbq-cab.jpg', 'BBQ Burger', 2)
    createMenuItem('https://www.foodrepublic.com/wp-content/uploads/2011/07/pizza-bacon-mushrooms.jpg', 'BBQ Pizza', 3)

    content.appendChild(headline)
    content.appendChild(menuDiv)
    console.log('checkmenu')
}