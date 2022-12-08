import React, {useState, useEffect} from 'react'
import AddArtist from "./components/AddArtist"
import SearchBar from "./components/SearchBar"
import ArtistPage from "./components/ArtistPage"
import Header from "./components/Header"

import './App.css';

function App() {

  const [artistData, setArtistData] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:9292/albums')
    .then(r => r.json())
    .then(data => setArtistData(data))
  }, [])


 
  const [searchArtist, setSearchArtist] = useState("")
  // console.log(artistData)
  const filteredArtists = artistData.filter((artistObj) => {
    
    return (artistObj.artist_name.toLowerCase().includes(searchArtist.toLowerCase()))
    
  })


  function handleDeleteAlbum(id){
    const updateAlbumArray = artistData.filter(album => album.id!== id)
    setArtistData(updateAlbumArray)
  }
  return (
    <div className="App">
      <Header />
      <SearchBar searchArtist = {searchArtist} setSearchArtist = {setSearchArtist}/>
      <ArtistPage selectedArtist = {filteredArtists} deleteAlbum={handleDeleteAlbum}/>
      <AddArtist artistData={artistData} setArtistData={setArtistData} />
    </div>
  );
}

export default App;
