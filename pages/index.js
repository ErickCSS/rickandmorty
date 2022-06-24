import {useState, useEffect} from 'react'
import Card from '../components/Card';
import Header from "../components/Header";


export default function Home() {

  const [characters, setCharacters] = useState([])
  const url = "https://rickandmortyapi.com/api/character"
  const FetchUrl = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    FetchUrl(url)
  }, [])
  
  return (
    <>
      <Header />
      <section className="py-7">
        <Card characters={characters} />
      </section>
    </>
  )
}
