class User {
    constructor({ id, login, email, password, role }) {
        this.id = id;
        this.login = login;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

export default User;