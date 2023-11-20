import axios from "axios";

const baseUrl = "http://localhost:8080";

export async function getItems() {
    try {
        const response = await axios.get(`${baseUrl}/items`)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getSortedItemsByName() {
    try {
        const response = await axios.get(`${baseUrl}/items/sort/name`)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getSortedItemsByPrice() {
    try {
        const response = await axios.get(`${baseUrl}/items/sort/price`)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getItemById(id) {
    try {
        const response = await axios.get(`${baseUrl}/items/${id}`)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
