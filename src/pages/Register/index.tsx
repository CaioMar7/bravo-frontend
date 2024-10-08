
import { IconInput } from "../../components/IconInput";
import { VscAccount } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
//import Hero from "../../assets/logo.png"
import { useState } from "react";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    async function handleRegister(event: React.MouseEvent<HTMLButtonElement>) {

        event.preventDefault()

        if (!name || !email || !password || !confirmPassword) {
            return alert("All fields must be filled out.")
        }

        try {

            if (password != confirmPassword) {
                return alert("Passwords don't match.")
            }

            await API.post('user', { name, email, password })
            alert('Created user.')
            navigate("/")

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

                    <form className='flex flex-col justify-between text-center h-5/6 md:w-2/6  shadow-md py-4 px-8 bg-white rounded'>

                        <img src="https://i.imgur.com/Qh3Wgdw.png" className='h-72 object-contain' />

                        <div className='space-y-2 md:text-xl'>
                            <IconInput icon={VscAccount} placeholder="Name" onChange={(e: any) => setName(e.target.value)} />
                            <IconInput icon={MdEmail} placeholder="Email" onChange={(e: any) => setEmail(e.target.value)} />
                            <IconInput icon={RiLockPasswordLine} placeholder="Password" onChange={(e: any) => setPassword(e.target.value)} type="password" />
                            <IconInput icon={RiLockPasswordLine} placeholder="Confirm Password" onChange={(e: any) => setConfirmPassword(e.target.value)} type="password" />
                        </div>

                        <button className='rounded text-white h-10 font-bold bg-indigo-900' onClick={(event) => handleRegister(event)}> Criar conta </button>
                        <p className='text-indigo-900 font-bold mb-8 underline text-sm cursor-pointer'> <a href="/"> Já possui conta? Se faça login clicando aqui </a> </p>
                    </form>
                </main>
            </div>
        </>
    )
}