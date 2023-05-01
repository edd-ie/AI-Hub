import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Nav from './components/Nav'
import Chat from './components/Chat'

function App() {
  return (
    <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/chat" element={<Chat/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
