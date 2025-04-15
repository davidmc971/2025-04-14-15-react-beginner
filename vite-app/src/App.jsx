import "./App.css";
import DancingEmoji from "./components/DancingEmoji";
import GreetBack from "./components/GreetBack";
import Greeting from "./components/Greeting";
import HeadTilt from "./components/HeadTilt";
import ListExample from "./components/ListExample";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/Greeting">Greeting</Link>
          </li>
          <li>
            <Link to="/DancingEmoji">DancingEmoji</Link>
          </li>
          <li>
            <Link to="/ListExample">ListExample</Link>
          </li>
          <li>
            <Link to="/GreetBack">GreetBack</Link>
          </li>
          <li>
            <Link to="HeadTilt">HeadTilt</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Greeting" element={<Greeting name="Alice" />} />
        <Route path="/DancingEmoji" element={<DancingEmoji />} />
        <Route path="/ListExample" element={<ListExample />} />
        <Route path="/GreetBack" element={<GreetBack />} />
        <Route path="/HeadTilt" element={<HeadTilt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
