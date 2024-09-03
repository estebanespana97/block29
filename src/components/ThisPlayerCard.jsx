export default function ThisPlayerCard({setSelectedPlayerId, player}){
    return(
        <div>
            <p>this is my player card for search bar</p>
            <p>{player.name}</p>
            <p>{player.phone}</p>
            <p>{player.email}</p>
            <button onClick={() => setSelectedPlayerId(player.id)}>Details</button>
        </div>
    )

}