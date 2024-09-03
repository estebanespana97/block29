import {useState, useEffect} from 'react';
import ThisPlayerCardForSearchbar from './ThisPlayerCardForSearchbar';

export default function Searchbar(){
    const [players, setPlayers] = useState( [
        { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
        { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
        { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
      ]);
    const [name, setName] = useState("");
    const [foundPlayers, setFoundPlayers] = useState("");

    useEffect(() => {
        async function fetchPlayers(){
          try{
            const response = await fetch(
              'https://fsa-puppy-bowl.herokuapp.com/api/2405-FTB-ET-WEB-PT/players'
            );
            const {data} = await response.json();
            setPlayers(data.players);
          }
          catch(error){
            console.error(error);
          }
        }
        fetchPlayers()
      },[]);

    async function handleSubmit(e){
        e.preventDefault();
        console.log(name);
        let filteredList = players.filter((thisPlayer) => thisPlayer.name === name);
        setFoundPlayers(filteredList);
    }

    return(
        <div>
            <h2>Sign Up Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Searchbar here: <input value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
            {foundPlayers.length? (
        <div>
          {foundPlayers.map((thisPlayer) => {
            return <ThisPlayerCardForSearchbar key={thisPlayer.Id} player={thisPlayer}/>;
        })}
        </div>) : (<div><h1>No Players Found!</h1></div>)}
        </div>
    );
}