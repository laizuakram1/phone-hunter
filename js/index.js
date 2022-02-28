const phoneContainer = document.getElementById('display-phones');

const searchButton = () => {
    const inputField = document.getElementById('input-field');
    const inputText = loadPhones(inputField.value);

}

const loadPhones = (phone) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`)
    .then(res => res.json())
    .then(data => displayPhones(data.data.slice(0, 20)))
}

const displayPhones = (data) => {
    for(const phone of data){
        console.log(phone.brand);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class="card my-4 border-0" style="width: 18rem;">
                <img height="450px" src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">${phone.brand}</p>
                  <button>More Details</button>
                </div>
              </div>
        `
        phoneContainer.appendChild(div);
    }
}