const tokenKey = 'token';

class Auth{
    constructor() {
        this.authenticated = localStorage.getItem(tokenKey) ? true : false;
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