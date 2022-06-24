import React from 'react'

const Header = () => {
  return (
   <>
      <header className="bg-slate-800 min-h-[600px] flex items-center">
         <div className="container mx-auto">
            <div className="text-center p-4">
               <h1 className='text-white uppercase font-bold text-[55px]'>Rick and Morty</h1>
            </div>
         </div>
      </header>
   </>
  )
}

export default Header