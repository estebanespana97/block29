import { useState} from 'react'
import SinglePlayer from './SinglePlayer';
import AllPlayers from './AllPlayers';

export default function AllPlayerHelper( {players, setPlayers}){
      const [selectedPlayer, setSelectedPlayerId] = useState(null);

      console.log(players);
      return(
        <div>
            {selectedPlayer ? (
        <div>
          <SinglePlayer setSelectedPlayerId={selectedPlayer}/>
        </div>) : (
        <div className="card">
          <AllPlayers setSelectedPlayerId={setSelectedPlayerId} players={players} setPlayers={setPlayers}/>
        </div>)
        }
        </div>
      );
}