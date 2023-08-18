import React, { useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [focusemail, setfocusemail] = useState("");
    const [focuspassword, setfocuspassword] = useState("");
    const [focusrepassword, setfocusrepassword] = useState("");
    const [focususername, setfocususername] = useState("");
    const [username, setUsername] = useState("");
    const handleRegister = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (username !== null && username !== undefined) {
            formData.append("username", username);
        }

        if (email !== null && email !== undefined) {
            formData.append("email", email);
        }

        if (password !== null && password !== undefined) {
            formData.append("password", password);
        }
        if (String(password).length > 16) {
            toast.error("Şifre max 16 karakter olmaldır");
        }
        if (password !== repassword) {
            toast.error("Şifreler eşleşmiyor");
        }

        else {
            axios.post("http://localhost/react-php-login/Backend/register.php", formData)
                .then((res) => {
                    if (res.data === "KAYIT BAŞARILI") {
                        toast.success(res.data)
                        return (<Navigate to={"/login"}></Navigate>);
                    }
                    else {
                        toast.error(res.data)
                    }
                })
                .catch((err) => toast.error(err));
        }
    }
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-purple-800 to-lila-500 z-10 flex items-center justify-center'>
            <Toaster position='top right' />
            <div className='w-1/3 shadow-xl p-2 rounded-md bg-neutral-950'>
                <div className='my-3'>
                    <h1 className='text-center text-4xl font-mono font-bold text-white'>Register</h1>
                </div>
                <form onSubmit={handleRegister}>
                    <div className='mb-3 flex flex-col px-2 '>
                        <label className='text-2xl text-white font-semibold font-mono' htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" className='p-2 rounded-md text-xl' value={username} onChange={(e) => setUsername(e.target.value)}
                            onBlur={() => setfocususername("username inputa tıklandı")} />
                        <div className='text-red-500'>
                            {
                                (focususername !== "" && username === "") && "username input boş geçilemez."

                            }
                        </div>
                    </div>
                    <div className='mb-3 flex flex-col px-2 '>
                        <label className='text-2xl text-white font-semibold font-mono' htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" className='p-2 rounded-md text-xl' value={email}
                            onChange={(e) => setEmail(e.target.value)} onBlur={() => setfocusemail("Email inputa tıklandı")} />
                        <div className='text-red-500'>
                            {
                                (focusemail !== "" && email === "") && "Email input boş geçilemez."

                            }
                        </div>
                    </div>
                    <div className='mb-3 flex flex-col px-2 relative'>
                        <label className='text-2xl text-white font-semibold font-mono' htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" className='p-2 rounded-md text-xl' value={password}
                            onChange={(e) => setPassword(e.target.value)} onBlur={() => setfocuspassword("password inputa tıklandı")} />
                        <div className='text-red-500'>
                            {
                                (focuspassword !== "" && password === "") && "Password input boş geçilemez."

                            }
                        </div>
                    </div>
                    <div className='mb-3 flex flex-col px-2 relative'>
                        <label className='text-2xl text-white font-semibold font-mono' htmlFor="repassword">Repassword:</label>
                        <input type="password" name="repassword" id="repassword" className='p-2 rounded-md text-xl' value={repassword}
                            onChange={(e) => setRepassword(e.target.value)} onBlur={() => setfocusrepassword("repassword inputa tıklandı")} />
                        <div className='text-red-500'>
                            {
                                (focusrepassword !== "" && repassword === "") && "rePassword input boş geçilemez."

                            }
                        </div>
                    </div>
                    <div className='flex items-center justify-center mb-3'>
                        <button disabled={
                            (email === "") ||
                            (password === "") ||
                            (repassword === "")
                        } className='duration-300 flex items-center justify-center font-bold text-xl shadow-md bg-transparent font-mono bg-white py-2 px-4 text-black rounded-md hover:bg-purple-400 hover:text-black' type='submit' >Kaydol</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage