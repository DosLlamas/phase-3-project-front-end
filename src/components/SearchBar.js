
function SearchBar(){


  // const handleText = (e) => {
  //   setSearchArtist(e.target.value)
  // }

    
    return (
       <>
       <div className="two-columns">
       <img className="searchpicture" src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png" alt="icon" />
       <div className="search" >
        <input
          type="text"
          placeholder="Who do you want to listen to?"
          // value=
          // onChange={handleText}
        />
        </div>
        
        </div>
       </>
    )
}

export default SearchBar;