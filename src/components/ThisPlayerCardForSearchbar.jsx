export default function ThisPlayerCardForSearchbar({player}){
    return(
        <div key={player.id} className="player-card">
            {/* Display the player's image, with the player's name as alt text */}
            <div className="player-image-container">
              <img src={player.imageUrl} alt={player.name}></img>
            </div>
            <div className="player-details">
              <h2>  {player.name} </h2>               
              <p>  {player.breed} </p> 
              <p> {player.status} </p>
            </div>
        </div>
    )

}