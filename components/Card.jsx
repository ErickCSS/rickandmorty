import React from 'react'
import Image from 'next/image'

const Card = ({characters}) => {
  return (
    <>
      <div className="container mx-auto px-12">
         <div className="grid grid-cols-3 gap-20">
            {
               characters.map((person) => (
                  <div key={person.id} className="flex bg-white rounded-lg border-[1px]">
                     <div>
                        <picture>
                           {/* <Image src={"person.image"} alt={person.image} width="150px" height="150px"/> */}
                           <img src={person.image} alt={person.name} className="w-28 h-28"/>
                        </picture>
                     </div>
                     <div className="pl-2">
                        <h4>{person.name}</h4>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
    </>
  )
}

export default Card