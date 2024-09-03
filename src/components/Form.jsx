import {useState} from 'react';

export default function Form({setPlayers}){

    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await fetch(
              'https://fsa-puppy-bowl.herokuapp.com/api/2405-FTB-ET-WEB-PT/players/',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: name,
                  breed: breed,
                  status: status,
                  imageUrl: imageUrl,
                }),
              }
            );
            const result = await response.json();
            console.log(result);

            //Now we add to the setPlayers
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
          } catch (err) {
            console.error(err);
          }
    }

    return(
        <div>
            <h2>Sign Up Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Breed: <input value={breed} onChange={(e) => setBreed(e.target.value)}/>
                </label>
                <label>
                    Status: <input value={status} onChange={(e) => setStatus(e.target.value)}/>
                </label>
                <label>
                    imageUrl: <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}