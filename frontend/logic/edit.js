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
    fetch(`http://localhost:8080/fridges/${id}`)
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
        fetch(`http://localhost:8080/fridges/${fridgeId}`, {
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
                console.log(res)
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
                showAlert();
            })
    } else {
        showAlert();
    }
}

getFridge(fridgeId);
