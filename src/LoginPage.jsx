import React, { useState } from 'react'
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visPassword, setVisPassword] = useState(false);
    const [focusemail, setfocusemail] = useState("");
    const [focuspassword, setfocuspassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (email !== null && email !== undefined) {
            formData.append("email", email);
        }
        if (password !== null && password !== undefined) {
            formData.append("password", password);
        }
        axios.post("http://localhost/react-php-login/Backend/login.php", formData)
            .then((res) => {
                if (res.data === "GİRİŞ BAŞARILI") {
                    toast.success(res.data, {
                        duration: 1500
                    })
                    toast.loading("Yönlendiriliyorsunuz", {
                        duration: 1500
                    });
                    setTimeout(function () {
                        navigate("Application")
                    }, 1700);
                }
                else {
                    toast.error(res.data)
                }
            })
            .catch((err) => toast.error(err));
    }
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-purple-800 to-lila-500 z-10 flex items-center justify-center'>
            <Toaster position='top right' />
            <div className='w-1/3 shadow-xl p-2 rounded-md bg-neutral-950'>
                <div className='my-3'>
                    <h1 className='text-center text-4xl font-mono font-bold text-white'>Login</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <div className='mb-3 flex flex-col px-2 '>
                        <label className='text-2xl text-white font-semibold font-mono' htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" className='p-2 rounded-md text-xl' value={email} onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => setfocusemail("Email inputa tıklandı")} />
                        <div className='text-red-500'>
                            {
                                (focusemail !== "" && email === "") && "Email input boş geçilemez."

                            }
                        </div>
                    </div>
                    <div className=' flex flex-col px-2 relative'>
                        <label className='text-2xl text-white font-semibold font-mono' htmlFor="password">Password:</label>
                        <div className='absolute right-10 top-1/2'>
                            {
                                visPassword === true
                                    ? <button type='button'> <AiFillEye onClick={() => setVisPassword(false)} className='text-black text-3xl'></AiFillEye></button>
                                    : <button type='button'><AiFillEyeInvisible onClick={() => setVisPassword(true)} className='text-black text-3xl'></AiFillEyeInvisible></button>

                            }
                        </div>
                        <input type={
                            visPassword === true ? "text" : "password"
                        } name="password" id="password" className='p-2 rounded-md text-xl' value={password}
                            onChange={(e) => setPassword(e.target.value)} onBlur={() => setfocuspassword("password inputa tıklandı")} />

                    </div>
                    <div className='text-red-500 mb-3 flex flex-col px-2 relative' >
                        {
                            (focuspassword !== "" && password === "") && "password input boş geçilemez."
                        }
                    </div>
                    <div className='flex items-center justify-center mb-3'>
                        <button disabled={
                            (email === "") ||
                            (password === "")
                        } className='duration-500 flex items-center justify-center font-bold text-xl shadow-md bg-transparent font-mono bg-white py-2 px-4 text-black rounded-md hover:bg-purple-400 hover:text-black' type='submit'>Giriş Yap</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage