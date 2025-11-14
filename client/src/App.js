import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Create from "./pages/Create";
 

function App() {

  return (

    <Router>
      <Link to="/">Home</Link>
      <Link to="/createpost">Create post</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
