export function authHeader(isImg = false,isJSON = false) {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        var headers = { 'Authorization': 'Bearer ' + user.token };
        if(isImg) headers['Content-Type'] = 'multipart/form-data';
        else if(isJSON) headers['Content-Type'] = 'application/json';
        return headers;
    } else {
        return {};
    }
}