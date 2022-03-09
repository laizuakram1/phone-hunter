const phoneContainer = document.getElementById('display-phones');
const singlePhoneContainer = document.getElementById('single-phone');
const userMessage = document.getElementById('message');

const searchButton = () => {
    const inputField = document.getElementById('input-field');
    const inputText = loadPhones(inputField.value);
    

    // clear data
    inputField.value = ' ';
}



const loadPhones = (phone) => {
    const inputField = document.getElementById('input-field');
    if(inputField.value == ''){
        userMessage.innerText = '*please type phone name';
    }else{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
}
    }
    

const clickButton = (para) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${para}`)
    .then(res => res.json())
    .then(data => console.log(data))
}
// const loadsinglePhone = (para) =>{
//     console.log(para.data.slug);
//     fetch(`https://openapi.programming-hero.com/api/phone/${para.data.slug}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

const displayPhones = (data) => {
    for(const phone of data){
        // console.log(phone.phone_name);
        const div = document.createElement('div');
        div.classList.add('col')
      
        div.innerHTML = `
            <div class="card my-4 border-0" style="width: 18rem;">
                <img height="450px" src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">${phone.brand}</p>
                  <button onclick="clickButton(${phone.phone_name})" class="btn btn-primary">More Details</button>
                </div>
              </div>
        `
        phoneContainer.appendChild(div);

    }
    
}
// // click button 
// const clickButton = id => {
//     console.log(id);
//     fetch(`https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
