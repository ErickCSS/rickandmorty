import {useState, useEffect} from 'react'
import Buttons from '../components/Buttons';
import Card from '../components/Card';
import Header from "../components/Header";
import Head from 'next/head'

export default function Home() {

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  const url = "https://rickandmortyapi.com/api/character"
  const FetchUrl = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }

  // Buttons Prev and Next
  const Previous = () => {
    FetchUrl(info.prev)
  }
  const Next = () => {
    FetchUrl(info.next)
  }
  // ===============

  useEffect(() => {
    FetchUrl(url)
  }, [])

  return (
    <>
      <Head>
        <title>Rick and Morty App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Header />
      <section className="py-20">
        <Card characters={characters} />
        <Buttons prev={info.prev} next={info.next} Previous={Previous} Next={Next}/>
      </section>
    </>
  )
}
