import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";

function App() {


  return (

    <Router>
      <Link to="/createpost">Create post</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
