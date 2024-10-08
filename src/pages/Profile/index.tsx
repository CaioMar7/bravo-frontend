import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { API } from "../../services/api"
import { useEffect, useState } from "react"

interface IUser {
    id: number; 
    name: string;
    email: string;
}

export function Profile() {

    const auth = useAuth()
    const navigate = useNavigate()

    const [user, setUser] = useState<IUser>({} as IUser)

    async function handleLogout() {
        await auth.logout()
        navigate("/")
    }

    useEffect(() => {

        const getUserInfo = async () => {
            try {
                const response = await API.get(`/user/${auth.email}`);
                setUser(response.data);
            } catch (error) {
                console.error("Erro ao obter informações do usuário:", error);
            }
        };

        getUserInfo();

    }, [])


    return (
        <>
            <div className="w-screen h-screen border-2 bg-indigo-200 overflow-hidden">
                <main className="flex justify-center items-center h-full">

                    <form className='flex flex-col justify-between h-2/6 md:w-2/6   shadow-md py-6 px-8 bg-white rounded'>

                        <div className='space-y-6 md:text-xl'>
                            <p className="p-2 border-indigo-300 border-2 rounded text-slate-600"> Id:  <span> {user.id} </span> </p>
                            <p className="p-2 border-indigo-300 border-2 rounded text-slate-600"> Nome:  <span> {user.name} </span> </p>
                            <p className="p-2 border-indigo-300 border-2 rounded text-slate-600"> Email: <span> {user.email} </span> </p>
                        </div>

                        <button className='rounded text-white h-10 font-bold bg-indigo-900' onClick={() => handleLogout()}> Logout </button>
                    </form>
                </main>
            </div>
        </>
    )
}