import './App.css'


import AllPlayerHelper from './components/AllPlayerHelper';
import Form from './components/Form'
import Searchbar from './components/Searchbar'

import Home from './components/Home';
import { Routes, Route, Link} from "react-router-dom";
import { useState, useEffect} from 'react'

function App() {
  const [players, setPlayers] = useState( [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ]);

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

  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/allplayers">All Players</Link>
        <Link to="/searchbar">Searchbar</Link>
        <Link to="/form">Form</Link>
      </div>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/allplayers" element={<AllPlayerHelper players={players} setPlayers={setPlayers}/>}/>
          <Route path="/form" element={<Form setPlayers={setPlayers}/>}/>
          <Route path="/searchbar" element={<Searchbar/>}/>
      </Routes>
    </div>
  )
}

export default App
