import { type } from "@testing-library/user-event/dist/type"
import React, {useState} from "react";

function AddArtist({artistData, setArtistData}){
   const [albumInput, setAlbumInput] = useState('')
   const [artistNameInput, setArtistNameInput] = useState('')
   const [yearReleaseInput, setYearReleaseInput] = useState('')
   const [albumCoverImageInput, setAlbumCoverImageInput] = useState('')
   const [listSong, setListSong] = useState('')

   const handleSubmit = (se) =>{
      se.preventDefault()

      let newAlbum={
         album_name: albumInput,
         artist_name: artistNameInput,
         release_year: yearReleaseInput,
         album_cover: albumCoverImageInput,
         song_cover: listSong
      }
   
fetch('http://localhost:9292/newalbums',{
   method: 'POST',
   headers: {'Content-Type': 'application/json'},
   body:JSON.stringify(newAlbum)
   })
   .then(res => res.json())
   .then(data => setArtistData([...artistData, data]));
}
    
     return (
        <div>
         <h2>New Album</h2>
         <form onSubmit={handleSubmit}>
            <input class="submitHolder" placeholder="Name Of Album" type="text"value={albumInput} onChange={(se)=>setAlbumInput(se.target.value)}/>
            <input class="submitHolder" placeholder="Name Of Artist" type="text"value={artistNameInput} onChange={(se)=>setArtistNameInput(se.target.value)}/>
            <input class="submitHolder" placeholder="Year Released" type="text"value={yearReleaseInput} onChange={(se)=>setYearReleaseInput(se.target.value)}/>
            <input class="submitHolder" placeholder="Album Cover Image" type="text"value={albumCoverImageInput} onChange={(se)=>setAlbumCoverImageInput(se.target.value)}/>
            <input class="submitHolder" placeholder="List Of Songs By Artist" type="text" value={listSong} onChange={(se)=>setListSong(se.target.value)}/>
            <button type="submit" className="button-52">Add Artist</button>
         </form>
        </div>
     )
}

export default AddArtist;