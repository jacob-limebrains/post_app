import axios from "axios";

const SERVER_IP = 'http://127.0.0.1:8000'

export const UserLogin = (username, password) => {
    axios.post(`${SERVER_IP}/api/auth/`, {
        username,
        password
    }).then(response => {
        if (response.status === 200) {
            console.log(response.data);
            console.log(response.status);
            return response.status;
        } else if (response.status === 400) {
            alert("Invalid data!")
            return response.status;
        } else {
            console.log(response.status)
            console.log(response.data)
        }
    }).catch(error => console.log(error))
}

export const UserRegister = (username, email, password) => {
    axios.post(`${SERVER_IP}/api/users/`, {
        username,
        email,
        password
    }).then(response => {
        console.log(response.data);
        console.log(response.status);
        return response.status;
    }).catch(error => {
        // console.log(error.response.data);
        const errors = [];
        for (const [err, value] of Object.entries(error.response.data)) {
            errors.push(value.toString());
        }
        alert(errors.join("\n"));
    })
}