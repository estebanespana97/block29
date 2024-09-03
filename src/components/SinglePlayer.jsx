import {useState, useEffect} from 'react';

export default function SinglePlayer({setSelectedPlayerId}){

    const [player, setPlayer] = useState([
        { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    ]);

    useEffect(() => {
        async function fetchPlayer(){
          try{
            const response = await fetch(
              `https://fsa-puppy-bowl.herokuapp.com/api/2405-FTB-ET-WEB-PT/players/${setSelectedPlayerId}`
            );
            const {data} = await response.json();
            setPlayer(data.player);
          }
          catch(error){
            console.error(error);
          }
        }
        fetchPlayer()
      },[]);


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