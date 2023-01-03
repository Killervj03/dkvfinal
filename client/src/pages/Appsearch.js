import { getPosts } from './api/axios'
import { useState, useEffect } from 'react'
import SearchBar from './pages/SearchBar'
import ListPage from './pages/ListPage'

function Appsearch() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      return json
    }).then(json=>{
      
    
      setSearchResults(json)
    })
  }, [])



  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  )
}

export default Appsearch;
