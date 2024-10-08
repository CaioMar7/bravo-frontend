interface InputProps {
    icon: React.FC,
    className?: string,
    placeholder?: string,
    type?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

export function IconInput({icon: Icon, ...rest} : InputProps){
    return(
        <div className="flex items-center gap-2 bg-white p-2 border-indigo-100 border-2 rounded focus-within:border-indigo-300 transition ease-in duration-500">
            {Icon && <Icon/>}
            <input className="focus:border-sky-70 outline-none h-8 w-full p-2 text-slate-600"{...rest}/>
        </div>
    )
}