import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Chat from './components/Chat'
import Art from './components/Art'
import Book from './components/Book'

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/chat" element={<Chat/>}/>
                <Route path="/art" element={<Art/>}/>
                <Route path="/book" element={<Book/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
