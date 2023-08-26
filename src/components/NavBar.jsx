'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FiMenu} from 'react-icons/fi'
import {GrFormClose} from 'react-icons/gr'
import {BsFacebook,BsInstagram,BsDiscord} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'


export default function NavBar () {
    const [toggle,setToggle] = useState(false)
    return(
        <div className='relative bg-white top-0 w-[100%] z-10 shadow-[0px_6px_4px_rgba(0,_0,_0,_0.25)]'>
            <div className='container mx-auto flex justify-between items-center px-4 py-4'>
                <div>
                <img className="relative w-full h-[57px] overflow-hidden cursor-pointer" alt="" src="harmony-logo 1.png"/>
                </div>
                <div className='hidden md:flex gap-20 text-black-700'>
                    <Link href='/home'>Trang chủ</Link>
                    <Link href='/library'>Thư viện</Link>
                    <Link href='/forum'>Diễn đàn</Link>
                    <Link href='/minigame'>Minigame</Link>

                </div>
                <div>
                <button className='hidden md:block border border-gray-700 px-4 py-1 rounded-md text-white-700 hover:bg-gray-700 hover:text-white'>Đăng nhập</button>
                </div>
                {toggle ?(
                    <GrFormClose onClick={()=>setToggle(!toggle)} size={30} className='md:hidden block'/>
                ): (
                    <FiMenu onClick={()=>setToggle(!toggle)} size={30} className='md:hidden block'/>
                    )}

            </div>
            <div className={`duration-300 md:hidden flex flex-col w-[50%] h-screen fixed bg-white/70 text-black top-[120px] ${toggle ? `left-[0]`: `left-[-100%]`}`}>
                <Link href='/' className='p-5'>Trang chủ</Link>
                <Link href='/'className='p-5'>Thư viện</Link>
                <Link href='/'className='p-5'>Diễn đàn</Link>
                <Link href='/'className='p-5'>Minigame</Link>
                <div className='p-5 mt-20 text-bold'>Stay in touch</div>
                <div className='flex flex-col gap-5 items-center mt-2'>
                <div className='bg-black-600 w-[250px] h-[1.5px]'></div>
                </div>
                <div className='flex gap-5'>
                    
                    <Link href="/" target="_blank"><BsFacebook size ={25} className='text-black-600'></BsFacebook></Link>
                    <Link href="/" target="_blank"><BsInstagram size ={25} className='text-black-600'></BsInstagram></Link>
                    <Link href="/" target="_blank"><BsDiscord size ={25} className='text-black-600'></BsDiscord></Link>
                    <Link href="/" target="_blank"><FaTwitterSquare size ={25} className='text-black-600'/></Link>
                    <Link href="/" target="_blank"><BiLogoGmail size ={25} className='text-black-600'/></Link>

                </div>
            </div>
        </div>
    )
}