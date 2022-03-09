const phoneContainer = document.getElementById('display-phones');
const singlePhoneContainer = document.getElementById('single-phone');
const singleDiv = document.createElement('div');
const userMessage = document.getElementById('message');

// search button handler
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
    

const displayPhones = (data) => {
    for(const phone of data){
        // console.log(phone.slug);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class=" card my-4 border-0 shadow-lg p-3 mb-5 bg-body rounded" style="width: 16rem;">
                <img height="370px" src="${phone.image}" class="card-img-top" alt="...">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">${phone.brand}</p>
                  <button onclick="detailsButton('${phone.slug}')" class="btn btn-primary ">More Details</button>
                </div>
              </div>
        `
        phoneContainer.appendChild(div);

    }
    
}

// single phone card
const detailsButton = data => {
    const url = `https://openapi.programming-hero.com/api/phone/${data}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data))
}

const displayPhoneDetails = info => {
    console.log(info.data);
   
    
   
    singleDiv.innerHTML = `
    
    <div class="rounded bg-info card mx-auto my-5" style="width: 18rem;">
    <img src="${info.data.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${info.data.name}</h5>
      <hr>
      <p class="card-text">${info.data.releaseDate}</p>
      <hr>
      <h3>Specification</h3>
      <hr>
      <p>Display Size: ${info.data.mainFeatures.displaySize.slice(0, 12)}</p>
      <hr>
      <p>Storage: ${info.data.mainFeatures.storage}</p>
      <hr>
      <p>Sensor: ${info.data.mainFeatures.sensors[0]}</p>
      <hr>
      <p>Chipset: ${info.data.mainFeatures.chipSet}</p>
      <hr>
      <p>Radio: ${info.data.others.Radio}</p>
      <hr>
      <p>NFC: ${info.data.others.NFC}</p>
      <hr>
      <p>USB: ${info.data.others.USB}</p>
     
    </div>
    </div>

    `
    singlePhoneContainer.appendChild(singleDiv);
}
