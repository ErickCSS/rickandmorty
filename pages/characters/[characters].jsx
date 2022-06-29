import React from "react";
import { useRouter } from "next/router";
import { User } from "../../services/getAllCharacters";

const Characters = () => {
  const router = useRouter();
  const { Characters } = router.query;
  let user;

  const userData = async () => {
    const data = await getAllCharacters(Characters || 2);
    user = data;
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 onClick={userData()} >Hola# {user?.species}</h1>
      </div>
    </>
  );
};

export default Characters;
