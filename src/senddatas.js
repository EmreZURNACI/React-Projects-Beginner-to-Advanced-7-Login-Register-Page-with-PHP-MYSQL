import React,{useState} from 'react'
import axios from 'axios';
function senddatas() {
    const [datas, setDatas] = useState();
    const sendData = (e, username, email, password) => {
        e.preventdefault();
        const formData = new FormData();
        if (username !== null && username !== undefined) {
            formData.append(username);
        }

        if (email !== null && email !== undefined) {
            formData.append(email);
        }

        if (password !== null && password !== undefined) {
            formData.append(password);
        }
        axios.post("http://localhost/react-php-login/Backend/login.php", formData)
            .then((res) => setDatas(res))
            .catch((err) => alert(err));
    }
    return (
        <></>
    )
}

export default senddatas