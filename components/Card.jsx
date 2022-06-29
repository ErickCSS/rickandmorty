import React from 'react'
import Image from 'next/image'
import {BsCircleFill} from 'react-icons/bs'
import Link from 'next/link'

const Card = ({characters}) => {
  return (
    <>
      <div className="container mx-auto">
         <div className="grid justify-center gap-5 px-4 md:grid-cols-3 xl:gap-8">
            {
               characters.map((person) => (
                  <Link key={person.id} href={`/characters/${person.id}`}>
                     <div className="max-w-[280px] xl:max-w-none flex flex-col xl:flex-row items-center bg-white hover:shadow-lg rounded-xl border-[2px] overflow-hidden transition ease-in-out duration-150 hover:cursor-pointer">
                        <div className='unset-img'>
                           <Image src={person.image} alt={person.image} layout="fill" className="custom-img"/>
                        </div>
                        <div className="p-3 font-nunito">
                           <h3 className='font-extrabold text-[1.4em] text-teal-600'>{person.name}</h3>
                           <h5 className='text-slate-500'> <span className='font-semibold'>Specie:</span> {person.species}</h5>
                           <h5 className='text-slate-500'> <span className="font-semibold">Gender:</span> {person.gender}</h5>
                           <h5 className='text-slate-500'> <span className="font-semibold">Last Location:</span> {person.location.name}</h5>
                           <h6>{ person.status === 'Alive' ? <span className='flex items-center text-green-700'> <BsCircleFill className='text-[0.6em] mr-2'/> {person.status}</span> : <span className='flex items-center text-red-700'> <BsCircleFill className='text-[0.6em] mr-2'/> {person.status}</span> }</h6>
                        </div>
                     </div>
                  </Link>
               ))
            }
         </div>
      </div>
   </>
  )
}

export default Card