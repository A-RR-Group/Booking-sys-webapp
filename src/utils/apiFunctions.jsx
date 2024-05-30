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

export function addStation(name) {
    const url = baseURL + 'addBusStation';
    const data = {
        name: name,
        state: true
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
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.error('Error:', error);
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
        throw error;
    });
}

export default {adminLogin, getExpresses, getStations, addStation, adminSignup, editStation, removeStation, removeExpress};