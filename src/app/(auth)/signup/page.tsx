"use client"

import { FormLogout } from "@/components/auth/form-logout";
import Link from "next/link";

export default function Page(){
    return <div className="flex-1 flex-col h-screen w-screen flex justify-center items-center">
        <FormLogout />
        <div className='flex gap-2'>
            <label className='text-white text-2xl'>Já tem conta?</label>
            <Link href="/signin" className='text-2xl text-themePrimary font-bold'>Fazer login</Link>
        </div>
    </div>
}