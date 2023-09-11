import React, { useEffect, useState } from "react";
import Header from "./componentes/Header";
import "./App.css";
function App() {
  const [user, setUser] = useState('');
  return (
    <div className="App">
      <Header setUser = {user} user = {user}/>

   
    </div>
  );
}

export default App;
