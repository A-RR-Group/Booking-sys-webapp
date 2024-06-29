let stage = "dev";
let baseUrl = "";
let expressBaseURL = ""

if (stage == "dev"){
    baseUrl = "http://localhost:3000/admin/";
    expressBaseURL = "http://localhost:3000/express/"
}else if (stage == "prod"){
    baseUrl = "https://booking-sys-servers.onrender.com/admin/"
    expressBaseURL = "https://booking-sys-servers.onrender.com/express/"
}

export default {baseUrl, expressBaseURL};