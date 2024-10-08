
import { IconInput } from "../../components/IconInput";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
//import Hero from "../../assets/logo.png"
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export function Login() {

    const auth = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(event: React.MouseEvent<HTMLButtonElement>) {

        event.preventDefault()

        if (!email || !password) {
            return alert("All fields must be filled out.")
        }

        try {
            await auth.authenticate({ email, password })
            navigate("/profile")
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) {
                alert(error.response.data.message)
            }
        }

    }

    return (
        <>
            <div className="w-screen h-screen border-2 bg-indigo-200 overflow-hidden">
                <main className="flex justify-center items-center h-full">

                    <form className='flex flex-col justify-between text-center h-4/6 md:w-2/6  shadow-md py-4 px-8 bg-white rounded'>

                        <img src="https://i.imgur.com/Qh3Wgdw.png" className='h-48 object-contain' />

                        <div className='space-y-2 md:text-xl'>
                            <IconInput icon={MdEmail} placeholder="Email" onChange={(e: any) => setEmail(e.target.value)} />
                            <IconInput icon={RiLockPasswordLine} placeholder="Password" onChange={(e: any) => setPassword(e.target.value)} type="password" />
                        </div>

                        <button className='rounded text-white h-10 font-bold bg-indigo-900 flex items-center justify-center' onClick={(event) => handleLogin(event)}> Entrar </button>
                        <p className='text-indigo-900 font-bold mb-8 underline text-sm cursor-pointer'> <a href="/register"> Não possui conta? Se cadastre clicando aqui </a> </p>

                    </form>

                </main>
            </div >
        </>
    )
}