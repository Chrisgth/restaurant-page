export default function contact() {
    const content = document.getElementById('content')
    content.innerHTML = ''
    
    const headline = document.createElement('h2')
    const contactDesc = document.createElement('p')
    const contactForm = document.createElement('form')

    headline.textContent = 'Contact'
    contactDesc.textContent = 'Want to send us a message? Fill out the form below!'
    content.appendChild(headline)
    content.appendChild(contactDesc)

    for (let i=0; i<3; i++){
        let formDiv = document.createElement('div')
        let formLabel = document.createElement('label')
        let formInput = document.createElement('input')

        formInput.type = 'text'
        formLabel.id = `formLabel${i}`
        formLabel.htmlFor = `formInput${i}`
        formInput.id = `formInput${i}`

        if (i===0) {
            formLabel.textContent = 'First Name:'
        } else if (i===1) {
            formLabel.textContent = 'Last Name:'
        } else if (i===2) {
            formLabel.textContent = 'E-Mail:'
        }
        formDiv.appendChild(formLabel)
        formDiv.appendChild(formInput)
        contactForm.appendChild(formDiv)
    }
    const formDiv3 = document.createElement('div')
    const formLabel3 = document.createElement('label')
    const formTxtArea = document.createElement('textarea')
    formDiv3.id = 'formDiv3'
    formTxtArea.id = 'formTxtArea'
    formLabel3.htmlFor = 'formTxtArea'
    formLabel3.textContent = 'Message:'
    formDiv3.appendChild(formLabel3)
    formDiv3.appendChild(formTxtArea)
    contactForm.appendChild(formDiv3)

    content.appendChild(contactForm)

    const formButton = document.createElement('button')
    formButton.type = 'button'
    formButton.id = 'formbtn'
    formButton.textContent = 'Submit'

    content.appendChild(formButton)

    console.log('checkcontact')
}