let fridgeId = localStorage.getItem('id');
let fridgeName = document.querySelector('#nameField');
let fridgePrice = document.querySelector('#priceField');
let fridgeImage = document.querySelector('#imgField');

function toMainPage() {
    window.location.href = 'index.html';
}

function showAlert() {
    document.querySelector('.alert').style.width = '25vw';
}

function hideAlert() {
    document.querySelector('.alert').style.width = '0vw';
}

async function getFridge(id) {
    fetch(`https://632032139f82827dcf26f6c9.mockapi.io/backend/cars/carPark/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            fridgeName.value = data.name;
            fridgePrice.value = data.price;
            fridgeImage.value = data.image;
        })
        .catch((err) => {
            document.querySelector('.alert').textContent = `${err}`;
            showAlert();
        });
}

async function updateFridge() {
    if (fridgeName.value && fridgePrice.value && fridgeImage.value && fridgePrice.value >= 1) {
        fetch(`https://632032139f82827dcf26f6c9.mockapi.io/backend/cars/carPark/${fridgeId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'name': fridgeName.value,
                'price': parseInt(fridgePrice.value),
                'image': fridgeImage.value
            })
        })
            .then(res => {
                if (res.ok) {
                    fridgeName.value = '';
                    fridgePrice.value = '';
                    fridgeImage.value = '';
                    localStorage.removeItem('id');
                    window.location.href = 'index.html';
                } else {
                    showAlert();
                }
            })
            .catch(() => {
                document.querySelector('.alert').textContent = 'Form is invalid, check your info';
                showAlert();
            })
    }
}

getFridge(fridgeId);
