import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Logo } from "../ui/logo"

export const FormLogout = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return <div className="flex flex-col w-96 justify-center items-center  shadow-md  p-6 gap-5 ">
         <Logo alt='Logomarca' width={150} height={100} />
        <Input label='Nome' colorLabel="#FFFFFF" value={name} onChange={(e)=>setName(e)}  placeholder='Digite seu nome'  />
        <Input label='E-mail' colorLabel="#FFFFFF" value={email} onChange={(e)=>setEmail(e)}  placeholder='Digite seu e-mail'  />
        <Input label='Senha' colorLabel="#FFFFFF" value={password} onChange={(e)=>setPassword(e)} password placeholder='Digite sua senha' />
        <Button label='Cadastrar'  />
    </div>
}