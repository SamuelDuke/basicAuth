import jwt from "jsonwebtoken";

const tokenKey = 'token';

const getInfoFromToken = () => {
    const token = localStorage.getItem(tokenKey);

    if (token) {
        const decodedToken = jwt.decode(token);

        if (decodedToken.name && decodedToken._id) {
            return {name: decodedToken.name, _id: decodedToken._id};
        }

        localStorage.removeItem(tokenKey);
        return ({name: "NA", _id:"NA"});
    }

    return ({name: "NA", _id:"NA"});
}

class Auth{
    constructor() {
        this.authenticated = localStorage.getItem(tokenKey) ? true : false;
        this.name = getInfoFromToken().name;
        this._id = getInfoFromToken()._id;
    }

    login(token, cb) {
        localStorage.setItem(tokenKey, token);
        this.authenticated = true;

        cb()
    }

    logout(cb) {
        localStorage.removeItem(tokenKey);
        this.authenticated = false;

        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();