export default function pageLoad() {
    const body = document.querySelector('body')
    const header = document.createElement('header')
    const content = document.getElementById('content')
    const headline = document.createElement('h2')
    const image = document.createElement('img')
    const descriptionDiv = document.createElement('div')
    const description = document.createElement('p')

    for ( let i=0; i<3; i++ ) {
        let button = document.createElement('button')
        button.textContent = 'Button'
        button.id = `btn${i}`
        header.appendChild(button)
    }

    headline.textContent = 'Home Grill'
    image.src = 'https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?t=st=1651647562~exp=1651648162~hmac=1032a7526c3c730d1cab48700282bf1233beb91222f7969c37f23c3b9c2a43e7&w=996'
    description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam, ut mollitia optio fugit dolor id. Veritatis adipisci placeat sed.'

    descriptionDiv.appendChild(description)
    body.prepend(header)
    content.appendChild(headline)
    content.appendChild(image)
    content.appendChild(description)
}