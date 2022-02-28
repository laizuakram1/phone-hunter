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

