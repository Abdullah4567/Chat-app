import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ChatBoard from "./views/ChatBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chats" element={<ChatBoard />} />
      </Routes>
    </div>
  );
}

export default App;
