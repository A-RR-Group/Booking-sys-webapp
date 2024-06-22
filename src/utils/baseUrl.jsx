let stage = "prod";
let baseUrl = "";

if (stage == "dev"){
    baseUrl = "http://localhost:3000/admin/";
}else if (stage == "prod"){
    baseUrl = "https://booking-sys-servers.onrender.com/admin/"
}

export default baseUrl;