import React from 'react'
import { Paytone_One } from 'next/font/google'
import { Quicksand } from 'next/font/google'
import Image from 'next/image'
const paytone = Paytone_One({subsets:['latin'] , weight:['400']})
const quicksand = Quicksand({subsets:['latin'],weight:['400']})
export default function Hero () {
  return(
    <div>
    <img className="relative w-full h-full" alt="" src="Group 554.png" />
      <div className="max-w-[1140px] m-40">
        <div className="absolute top-[37%] w-full md:-[50%] max-w-[600px] h-full flex flex col text-black">
          <div className={paytone.className}> 
            <h1 className ='text-6xl [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]'>Thư viện tài liệu</h1>
            <h1 className='text-6xl [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]'>{`Harmony`}</h1>
          </div>
        </div>
        <div>
          <p className="absolute top-[50%] mt-20 text-[18px] leading-[30px] font-semibold font-quicksand text-white text-left inline-block w-[411px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            "Tập trung vào việc chăm sóc trí óc và tìm hiểu về sức khỏe tâm thần 
            - Đây là bí quyết để xây dựng một cuộc sống bền vững và hạnh phúc."
          </p>
        </div>
        <div>
          <img className='absolute top-[170px] left-[916.5px] w-[429.98px] h-[445.89px]' alt='' src="Group 551.png" />
      </div>
    </div>
    </div>
    )
}