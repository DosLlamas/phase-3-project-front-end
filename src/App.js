import React, {useState, useEffect} from 'react'
import AddArtist from "./components/AddArtist"
import SearchBar from "./components/SearchBar"
import ArtistPage from "./components/ArtistPage"
import Header from "./components/Header"

import './App.css';

function App() {

  const [artistData, setArtistData] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:9292/')
    .then(r => r.json())
    .then(data => console.log(data))
  }, [])


 
  // const [searchArtist, setSearchArtist] = useState("")
  // console.log(artistData)
  // const filteredArtists = artistData.filter((artistObj) => {
    
  //   return (artistObj.name.toLowerCase().includes(searchArtist.toLowerCase()))
    
  // })
  // selectedArtist = {filteredArtists}
  // searchArtist = {searchArtist} setSearchArtist = {setSearchArtist}
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <ArtistPage />
      <AddArtist />
    </div>
  );
}

export default App;
