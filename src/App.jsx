import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Test from './Pages/Test';
import Leaderboard from './Pages/Leaderboard';


function App() {
  return (
    <Router>
      <Nav />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;