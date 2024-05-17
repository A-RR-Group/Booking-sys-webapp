const baseURL= "http://localhost:3000/admin/";

export function adminLogin(email, password) {
    const url = baseURL + 'login';
    const data = {
        email: email,
        password: password
    };

    const jsonData = JSON.stringify(data);

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.error('Error:', error);
        throw error; // Rethrow the error to be caught by the caller
    });
}

export function getExpresses (){
    const url = baseURL + 'getExpresses';

    fetch(url, {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.expresses);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export function getStations (){
    const url = baseURL + 'getStations';

    fetch(url, {
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.stations);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export default {adminLogin, getExpresses, getStations};