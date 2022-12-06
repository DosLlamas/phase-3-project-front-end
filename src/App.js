import React, {useState, useEffect} from 'react'
import AddArtist from "./components/AddArtist"
import SearchBar from "./components/SearchBar"
import ArtistPage from "./components/ArtistPage"

import './App.css';

function App() {
// console.log("working?")
  const [artistData, setArtistData] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:9292/')
    .then(r => r.json())
    .then(data => console.log("Fetch:", data))
  }, [])
  

  const [searchArtist, setSearchArtist] = useState("")

  // const filteredArtists = artistData.filter(artistObj => {
  //   return (artistObj).toLowerCase().includes(searchArtist.toLowerCase())
  // })
  // selectedArtist = {filteredArtists}
  return (
    <div className="App">
      <SearchBar searchArtist = {searchArtist} setSearchArtist = {setSearchArtist}/>
      <ArtistPage />
      <AddArtist />
    </div>
  );
}

export default App;
