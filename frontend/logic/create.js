function toMainPage() {
    window.location.href = 'index.html';
}

function showAlert() {
    document.querySelector('.alert').style.width = '25vw';
}

function hideAlert() {
    document.querySelector('.alert').style.width = '0vw';
}

async function createFridge() {
    let image = document.querySelector('#imgField').value;
    let name = document.querySelector('#nameField').value;
    let price = parseInt(document.querySelector('#priceField').value);
    console.log(typeof (price));
    if (image && name && price >= 1) {
        fetch('http://localhost:8080/fridges', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                'name': name,
                'price': price,
                'image': image
            })
        })
            .then(res => {
                console.log(res)
                if (res.ok) {
                    image = '';
                    name = '';
                    price = 1;
                    window.location.href = 'index.html';
                }
            })
            .catch(() => {
                showAlert();
            });
    } else {
        showAlert();
    }
}
