"use client"

import React, { useState } from 'react'
import { Icons } from './icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

type Props = {
    label ?: string;
    colorLabel ?: string;
    placeholder ?: string; 
    icon ?: string;
    iconRight ?: IconDefinition;
    password ?: boolean; 
    value : string;
    colorValue ?: string; 
    filled ?: boolean;
    onChange : (newValue : string)=> void; 
}

export const Input = ({ label, colorLabel, placeholder, icon, iconRight, password, value, colorValue, filled, onChange } : Props) => {
    
    const [showPassword, setShowPassord] = useState(false)

    return <div className='flex flex-col w-full '>
        {label &&
            <label className={`text-2xl mb-3`} style={{ color : colorLabel }}>{label}</label>
        }
        <div className='has-[:focus]:border-themePrimary bg-themeInative/20 border-2 border-themeInative/10 rounded-lg  focus:border-themePrimary flex items-center px-2'>

            <input 
                value={value} 
                onChange={e=>onChange && onChange(e.target.value)} 
                className='h-14 w-full bg-transparent outline-none px-3 text-white text-lg'
                type={password &&  !showPassword ? 'password' : 'text'}
                style={{ color :  colorValue }}
            />
            {password &&
            <div className='cursor-pointer mr-2' onClick={()=>setShowPassord(!showPassword)}>
              <Icons icon={showPassword ? faEye : faEyeSlash} size='6' color='white'  />
            </div>
            }
        </div>
    </div>
}