import {useState, useEffect} from 'react'
import {getAllCharacters} from '../../services/getAllCharacters'

const useApi = () => {
   const [characters, setCharacters] = useState([])
   const [info, setInfo] = useState({})
   const [link, setLink] = useState("https://rickandmortyapi.com/api/character")
   const [loading, setLoading] = useState(false)
   useEffect(() => {
      setLoading(true)
      getAllCharacters(link)
         .then(data => {
            setCharacters(data.results)
            setInfo(data.info)
         })
         .catch(error => console.log(error))
         .finally(() => {
            setLoading(false)
         })
   }, [link])

   // Buttons Prev and Next
  const Previous = () => {
   setLink(info.prev)
 }
 const Next = () => {
   setLink(info.next)
 }
 // ===============

   return [characters, info, Previous, Next, loading]
}

export default useApi