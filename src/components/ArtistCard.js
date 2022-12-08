import React, {useState} from 'react';
const headers ={
    Accepts: "application/json",
    "Content-Type": "application/json"
}
function ArtistCard({artistItem, deleteAlbum}) {
    function handleDelete(id){
        deleteAlbum(id)
        fetch( `http:localhost:9292/albums/${id}`, {
            method: 'DELETE',
            headers,
        })
    }
    
    return(
        <div>
            <div class="mainContainer">
                <div class="theCard" >
                    <div class="frontCard">
                        <img src={artistItem.album_cover} alt={"album cover"}/>
                        <h3>{artistItem.album_name}</h3>
                    </div>
                    <div class="backCard">
                        <h4>{artistItem.song_cover}</h4>
                        <h3>{artistItem.album_name}</h3>
                    </div>
                </div>
            </div>
                    <button class="delete" onClick={()=>handleDelete(artistItem.id)}>Delete</button>
        </div>
    )
    
    
    
}
export default ArtistCard;