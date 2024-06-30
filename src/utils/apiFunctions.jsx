import baseUrl from "./baseUrl";

const baseURL= baseUrl.baseUrl;
const expressBaseURL = baseUrl.expressBaseURL;

export function adminLogin(email, password) {
    const url = baseURL + 'login';
    const data = {
        email: email,
        password: password
    };

    const jsonData = JSON.stringify(data);

    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        throw error; // Rethrow the error to be caught by the caller
    });
}

export function expressLogin(email, password) {
    const url = expressBaseURL + 'login';
    const data = {
        email: email,
        password: password
    };

    const jsonData = JSON.stringify(data);

    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        throw error; // Rethrow the error to be caught by the caller
    });
}

export function getExpresses (){
    const url = baseURL + 'getExpresses';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    };

    fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: headers
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        if(data.access_token){
            localStorage.setItem("access_token", response.access_token);
        }else if(data.error == "Unauthorized user" || data.error == "Token missing"){
            logout();
        }else{
            return data.expresses;
        }
    })
    .catch(error => {
        throw error;
    });
}

export function getStations (){
    const url = baseURL + 'getStations';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    };

    fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: headers
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        if(data.access_token){
            localStorage.setItem("access_token", response.access_token);
        }else if(data.error == "Unauthorized user" || data.error == "Token missing"){
            logout();
        }else{
            return data.stations;
        }
    })
    .catch(error => {
        throw error;
    });
}

export function addStation(name) {
    const url = baseURL + 'addBusStation';
    const data = {
        name: name,
        state: true
    };
    const jsonData = JSON.stringify(data);

    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("access_token")}`
        },
        body: jsonData
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        throw error; 
    });
}

export function addExpress(name, email, phone) {
    const url = baseURL + 'addExpress';
    const data = {
        name: name,
        email: email,
        phone_number: phone,
        state: true
    };
    const jsonData = JSON.stringify(data);

    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("access_token")}`
        },
        body: jsonData
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        throw error; 
    });
}

export function adminSignup(username, email, password) {
    const url = baseURL + 'register';
    const data = {
        username: username,
        email: email,
        password: password
    };

    const jsonData = JSON.stringify(data);

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("access_token")}`
        },
        body: jsonData
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        throw error;
    });
}

export function editStation(id , name) {
    const url = baseURL + 'editBusStation';
    const data = {
        id: id,
        name: name,
        state: true
    };

    const jsonData = JSON.stringify(data);

    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("access_token")}`
        },
        body: jsonData
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        throw error;
    });
}

export function removeStation(id) {
    const url = baseURL + 'RemoveBusStation';
    const data = {
        id: id
    };

    const jsonData = JSON.stringify(data);

    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("access_token")}`
        },
        body: jsonData
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        throw error;
    });
}

export function removeExpress(id) {
    const url = baseURL + 'removeExpress';
    const data = {
        id: id
    };

    const jsonData = JSON.stringify(data);

    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("access_token")}`
        },
        body: jsonData
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        throw error;
    });
}

export async function verifyToken() {
    const url = baseURL + 'verify_token';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: headers
        });
        const data = await response.json();
        if(data.access_token){
            localStorage.setItem("access_token", response.access_token);
            return true;
        }else if(data.error == "Unauthorized user" || data.error == "Token missing" || data.error == "Forbidden"){
            return false;
        }else{
            return true;
        }
    } catch (error) {
        return false;
    }
}

export default {adminLogin, expressLogin, getExpresses, getStations, addStation, addExpress, adminSignup, editStation, removeStation, removeExpress, verifyToken};