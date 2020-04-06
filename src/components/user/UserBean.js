export default class UserBean {

    constructor() {
        this._userName='';
        this._picture='';
        this._token='';
        this._roles=[];
    }


    get userName() {
        return this._userName;
    }

    set userName(value) {
        this._userName = value;
    }

    get picture() {
        return this._picture;
    }

    set picture(value) {
        this._picture = value;
    }


    get roles() {
        return this._roles;
    }

    set roles(value) {
        this._roles = value;
    }

    get token() {
        return this._token;
    }

    set token(value) {
        this._token = value;
    }

    toString(){
        return {userName:this.userName};
    }

}