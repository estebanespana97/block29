export default function AllPlayers({setSelectedPlayerId, players, setPlayers}){

    console.log(players);

    async function deletePlayer(id){
        fetch('https://fsa-puppy-bowl.herokuapp.com/api/2405-FTB-ET-WEB-PT/players', {
            method: 'DELETE',
          });
          try {
            const response = await fetch(
              `https://fsa-puppy-bowl.herokuapp.com/api/2405-FTB-ET-WEB-PT/players/${id}`,
              {
                method: 'DELETE',
              }
            );
            const result = await response.json();
            console.log(result);
          } catch (err) {
            console.error(err);
          }
          let newList = players.filter((thisPlayer) => thisPlayer.id != id);
          setPlayers(newList);
      }

    return (
      <div className="players">
        {/* Map through the data array and generate a div for each player */}
        {players.length && players.map((player) => (
          // Use the player's ID as the key for this div
          <div key={player.id} className="player-card">
            {/* Display the player's image, with the player's name as alt text */}
            <div className="player-image-container">
              <img src={player.imageUrl} alt={player.name}></img>
            </div>
            <div className="player-details">
              <h2>  {player.name} </h2>               
              <p>  {player.breed} </p> 
              <p> {player.status} </p>
              <button onClick={() => setSelectedPlayerId(player.id)}>Details</button>
              <button onClick={() => deletePlayer(player.id)}>Delete Me</button>
            </div>
          </div>
        ))}
      </div>
    );
}