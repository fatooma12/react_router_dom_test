
import './App.css';
import Nav from "./component/Nav";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Profile from "./component/Profile";

function App() {
  return (
    <div>
       <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path="/" element={< Home />}/>
      <Route path="/about" element={< About />}/>
      <Route path="/profile" element={< Profile />}/>
    </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
