import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
   <>
      <header className="bg-slate-800 min-h-[600px] flex items-center">
         <div className="container mx-auto">
            <div className="text-center p-4">
               <Image src={"/rickandmorty.png"} alt="rickandmorty" width={325} height={325} />
               <h1 className='text-white uppercase font-black text-[35px] xl:text-[65px] font-nunito'>Rick and Morty</h1>
               <h6 className='font-nunito text-white'>Created By ErickCs</h6>
            </div>
         </div>
      </header>
   </>
  )
}

export default Header