let fridges = [];// всьо шо на сервачку
let filterArr = [];// новий масив при фільтруванні

function toCreatePage() {
    window.location.href = 'create.html';
}

function toEditPage(id) {
    localStorage.setItem('id', id);
    window.location.href = 'edit.html';
}

function showAlert() {
    document.querySelector('.alert').style.width = '25vw';
}

function hideAlert() {
    document.querySelector('.alert').style.width = '0vw';
}

function createFridgeElem(arr) {
    let index = 0;
    arr.forEach(element => {
        document.querySelector('.content').innerHTML += `
        <div class="item">
            <img src="${element.image}" alt="">
            <h2>${element.name}</h2>
            <p>${element.price}$</p>
            <div class="actions">  
                <button class="edit" onclick="toEditPage(${element.id})">Edit</button>
                <button class="delete" onclick="deleteFridge(${element.id}, ${index++})">Delete</button>
            </div>
        </div>
        `;
    });
} 
// створює плитку яка витягує дані з сервачка
async function getFridge() {
    fetch('http://localhost:8080/fridges')
        .then(res => res.json())
        .then(data => {
            fridges = data;
            document.querySelector('.content').replaceChildren();// ріплейс очишає плиточку на іннер html можна поміняти
            createFridgeElem(fridges);
            getTotalPrice(fridges);
        })
        .catch(err => console.log(err));
}

function searchFridge() {
    document.querySelector('#name').checked = false;
    document.querySelector('#price').checked = false;
    let search = document.querySelector('#search').value.toLowerCase();
    if (search) {
        let reg = new RegExp(`${search}`);
        filterArr = fridges.filter(element => reg.test(element.name.toLowerCase()) === true);
        document.querySelector('.content').replaceChildren();
        createFridgeElem(filterArr);
        getTotalPrice(filterArr);
    } else {
        getFridge();
    }
}

function sortNameAl(arr) {
    document.querySelector('#price').checked = false;
    arr.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        } else {
            return 0;
        }
    });
    document.querySelector('.content').replaceChildren();
    createFridgeElem(arr);
}

function sortByName() {
    if (document.querySelector('#name').checked) {
        if (document.querySelector('#search').value) {
            sortNameAl(filterArr);
        } else {
            sortNameAl(fridges);
        }
    } else if (!document.querySelector('#search').value) {
        document.querySelector('.content').replaceChildren();
        getFridge();
    }
}

function sortPriceAl(arr) {
    document.querySelector('#name').checked = false;
    arr.sort((a, b) => {
        return a.price - b.price;
    });
    document.querySelector('.content').replaceChildren();
    createFridgeElem(arr);
}

function sortByPrice() {
    if (document.querySelector('#price').checked) {
        if (document.querySelector('#search').value) {
            sortPriceAl(filterArr);
        } else {
            sortPriceAl(fridges);
        }
    } else if (!document.querySelector('#search').value) {
        document.querySelector('.content').replaceChildren();
        getFridge();
    }
}

function getTotalPrice(arr) {
    let total = 0;
    arr.forEach(element => {
        total += element.price;
    });
    document.querySelector('#totalPrice').textContent = `${total}$`;
}

async function deleteFridge(id, index) {
    fetch(`http://localhost:8080/fridges/${id}`,{
        method: 'DELETE'
    })  
    .then(res => {
        if(res.ok) {
            fridges.splice(index, 1);
            document.querySelector('.content').replaceChildren();
            createFridgeElem(fridges);
            getTotalPrice(fridges);
        }
    }) 
} 

getFridge();
