import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import User  from "../../services/getAllCharacters.js";

// export async function getServerSideProps({params}){
//   const res = await fetch(`https://rickandmortyapi.com/api/character/${params.character}`)

//     return{
//       props: {
//         personaje: await res.json()
//       }
//     }
// }

const Character = () => {
  const [personaje, setPersonaje] = useState([])
  const {
    query: {character},
  } = useRouter()

  const urlID = `https://rickandmortyapi.com/api/character/${character}`

  useEffect(() => {
    User.getUserById(urlID)
    .then(data => {
      setPersonaje(data)
    })
    .catch(error => console.log(error))
  }, [urlID])

  return (
    <>
      <div className="container mx-auto">
        <h1>Personaje - {personaje.name}</h1>
      </div>
    </>
  );
};

export default Character;
