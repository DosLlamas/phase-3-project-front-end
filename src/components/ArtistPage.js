import React from 'react';
import ArtistCard from './ArtistCard';


function ArtistPage({selectedArtist}){
    // console.log(selectedArtist);
    const artistList = selectedArtist.map((artistObj) => {
        return(
            <ArtistCard key={artistObj.id} artistItem={artistObj} />
        )
    })


    return (
        <ul className="artist-list">
            {artistList}
        </ul>
    )
}

export default ArtistPage;