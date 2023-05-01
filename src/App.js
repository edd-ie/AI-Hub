import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Chat from './components/Chat'

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/chat" element={<Chat/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
