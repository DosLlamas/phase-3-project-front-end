import React, {useState} from 'react';
function ArtistCard({artistItem}) {
    
    return(
        <ul className="card">
            <img src={artistItem.album_cover} alt={"album cover"}/>
            <h3>{artistItem.album_name}</h3>
        </ul>
    )
    
    
    
}
export default ArtistCard;