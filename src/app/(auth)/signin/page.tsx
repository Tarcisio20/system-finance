
"use client"

import React, { useState } from 'react'
import { FormLogin } from "@/components/auth/form-login";
import Link from 'next/link';

export default function Page(){
    return <div className="flex-1 flex-col h-screen w-screen flex justify-center items-center">
        <FormLogin />
        <div className='flex gap-2'>
            <label className='text-white text-2xl'>Não tem conta?</label>
            <Link href="/signup" className='text-2xl text-themePrimary font-bold'>Cadastrar</Link>
        </div>
    </div>
}