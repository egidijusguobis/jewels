import axios from "axios";
import { useEffect, useState } from "react";
import JewelryList from "./Components/JewelryList";
function App() {

  const [blings, setBlings] =useState([])

  useEffect(() => {
    axios.get('http://localhost:3003/jewelry')
    .then(res => {
      setBlings(res.data);
      console.log(res.data);
    })
  },[])

  return (
    <div className="jewelry">
      <JewelryList blings={blings}></JewelryList>
    </div>
  );
}

export default App;
