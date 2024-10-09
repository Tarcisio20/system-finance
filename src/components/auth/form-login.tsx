"use client"

import React, { useState } from 'react'

import { Input } from "../ui/input"
import { Logo } from '../ui/logo'
import { Button } from '../ui/button'

export const FormLogin = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')


    return <div className="flex flex-col w-96 justify-center items-center  shadow-md  p-6 gap-5 ">
        <Logo alt='Logomarca' width={150} height={100} />
        <Input label='Login' colorLabel="#FFFFFF" value={login} onChange={(e)=>setLogin(e)}  placeholder='Digite seu e-mail'  />
        <Input label='Senha' colorLabel="#FFFFFF" value={password} onChange={(e)=>setPassword(e)} password placeholder='Digite sua senha' />
        <Button label='Entrar'  />
    </div>
}