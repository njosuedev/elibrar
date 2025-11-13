import './App.css';
import axios from "axios";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response);
    })
  }, [])
  return (
     <>
     </>
  );
}

export default App;
