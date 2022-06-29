import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import User  from "../../services/getAllCharacters.js";

const Character = () => {
  const [individual, setIndividual] = useState([])
  const router = useRouter()

  console.log(router);

  const { index } = router.query;

  console.log(index);

  const urlID = `https://rickandmortyapi.com/api/character/${index}`
  
  useEffect(() => {
    User.getUserById(urlID)
    .then(data => {
      setIndividual(data)
    })
    .catch(error => console.log(error))
  }, [urlID])

  return (
    <>
      <div className="container mx-auto">
        <h1>Hola</h1>
      </div>
    </>
  );
};

export default Character;
