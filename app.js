const customerName = document.getElementById('customer-name');
const customerText = document.getElementById('customer-text');
const buttons = document.querySelectorAll('.btn');


let index = 0;
const customers = [];

// Customer Constructor
function Customer(name, text){
    this.name = name
    this.text = text
}

// Create Customer function
function createCustomer(name, text) {
    let customer = new Customer(name, text);

    customers.push(customer);
}

// Create new customeers
createCustomer('John', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non architecto facere eaque in assumenda voluptatum modi unde sit molestias cupiditate exercitationem nisi amet perspiciatis, fugiat omnis veniam sequi placeat cumque?')
createCustomer('Sandy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugiat possimus, sint sequi eum nihil ipsa delectus inventore laboriosam aliquam harum illum! Nisi velit doloremque, fugit labore eius vitae, assumenda voluptatum placeat consectetur nemo amet! Numquam asperiores sit molestias consequuntur.')
createCustomer('Amy', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus officia itaque possimus ratione tenetur quibusdam enim sapiente rem voluptatibus.')
createCustomer('Tyrell', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, minus pariatur perferendis illo fuga aspernatur consectetur ad odit aut enim veritatis dicta repudiandae vero excepturi sunt id. Amet totam explicabo, dolorem dolores nihil maxime!')
createCustomer('wanda', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur repudiandae, voluptatibus doloribus illum facere, optio nihil ratione, eum reiciendis at asperiores voluptate. Rem nam at rerum fuga delectus!')


// Add eventlistener to buttons
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.classList.contains('btn-right')){
            if(index === 0){
                index = customers.length;
            }
            index--
            customerName.textContent = customers[index].name;
            customerText.textContent = customers[index].text;
        }
        if(e.target.classList.contains('btn-left')){
            index++
            if(index === customers.length){
                index = 0;
            }
            customerName.textContent = customers[index].name;
            customerText.textContent = customers[index].text;
        }
    })
})