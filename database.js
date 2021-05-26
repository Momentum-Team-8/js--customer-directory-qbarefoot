const customer = customers[0]
moment(customer.dob.date).format("MMM, D, YYYY")
const insertionPoint = document.querySelector('#output')

for (let customer of customers) {

    const customerCard = document.createElement('div')

    customerCard.classList.add('customer-card')

    insertionPoint.appendChild(customerCard)

    const customerImage = document.createElement('img')

    customerImage.src = customer.picture.large

    customerCard.appendChild(customerImage)

}