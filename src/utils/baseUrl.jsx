let stage = "dev";
let baseUrl = "";

if (stage == "dev"){
    baseUrl = "http://localhost:3000/admin/";
}else if (stage == "prod"){
    // set baseUrl to the Url of deployed backend
}

export default baseUrl;