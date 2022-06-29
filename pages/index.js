import Buttons from '../components/Buttons';
import Card from '../components/Card';
import Header from "../components/Header";
import Head from 'next/head'
import useApi from '../components/hooks/useApi';

export default function Home() {

  const [characters, info, Previous, Next, loading] = useApi()

  return (
    <>
      <Head>
        <title>Rick and Morty App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Header />
      <section className="py-20">
        {
          loading ? <div className='text-center'><span className='font-nunito text-[3em] text-teal-600 font-black uppercase'>Loading Characters...</span> </div>: null
        }
        <Card characters={characters} />
        <Buttons prev={info.prev} next={info.next} Previous={Previous} Next={Next}/>
      </section>
    </>
  )
}
