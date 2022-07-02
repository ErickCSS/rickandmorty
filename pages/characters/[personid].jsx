import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import User from "../../services/getAllCharacters.js";
import Image from "next/image.js";
import { BsCircleFill } from "react-icons/bs";
import Link from "next/link.js";

// export async function getServerSideProps({params}){
//   const res = await fetch(`https://rickandmortyapi.com/api/character/${params.character}`)

//     return{
//       props: {
//         personaje: await res.json()
//       }
//     }
// }

const Character = () => {
  const urlID = `https://rickandmortyapi.com/api/character`;
  const [personaje, setPersonaje] = useState([]);
  const {
    query: { personid },
  } = useRouter();
  useEffect(() => {
    User.getUserById(`${urlID}/${personid}`)
      .then((data) => {
        setPersonaje(data);
      })
      .catch((error) => console.log(error));
  }, [urlID, personid]);
  return (
    <>
      <div className="container py-24 mx-auto">
        {personaje && (
          <div className="flex flex-col items-center justify-center font-nunito">
            <div className="mb-6 shadow-lg unset-img">
              {
                personaje.image && (
                  <Image src={personaje.image} alt={personaje.name} layout='fill' className="rounded-md custom-img-2"/>
                )
              }
            </div>
            <div className="mt-4">
              <h1 className="text-5xl font-bold text-center text-teal-600 uppercase">
                {personaje.name}
              </h1>
              <div className="flex flex-col items-center">
                <div className="flex content-center justify-between w-[400px] mt-5">
                  <h4 className="text-slate-500">
                    <span className="font-bold">Specie:</span>{" "}
                    {personaje.species}
                  </h4>
                  <h4 className="text-slate-500">
                    <span className="font-bold">Gender:</span>{" "}
                    {personaje.gender}
                  </h4>
                  {personaje.status === "Alive" ? (
                    <h4 className="flex items-center text-green-600">
                      <span className="flex items-center font-bold">
                        {" "}
                        Status: <BsCircleFill className="text-[0.6em] mx-2" />
                      </span>{" "}
                      {personaje.status}
                    </h4>
                  ) : (
                    <h4 className="flex items-center text-red-600">
                      <span className="flex items-center font-bold">
                        {" "}
                        Status: <BsCircleFill className="text-[0.6em] mx-2" />{" "}
                      </span>{" "}
                      {personaje.status}
                    </h4>
                  )}
                </div>
                <div className="mt-5">
                  <div className="flex justify-between w-[400px]">
                    <div>
                      <h4 className="font-bold text-slate-500">Origen:</h4>
                      <h5 className="text-slate-500">{personaje.origin?.name === 'unknown' ? <span>Origin is Unknown</span> : personaje.origin?.name}</h5>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-500">Location:</h4>
                      <h5 className="text-slate-500">{personaje.location?.name}</h5>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-500">Episodes:</h4>
                      <h5 className="text-slate-500">{personaje.episode?.length}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="text-center">
        <Link href="/">
          <a className="px-4 py-2 text-white transition-all duration-150 ease-in-out border-2 border-solid rounded-md bg-slate-700 font-nunito hover:bg-transparent border-slate-700 hover:text-slate-700">
            Back to Home
          </a>
        </Link>
      </div>
    </>
  );
};

export default Character;
