import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ChatBoard from "./views/ChatBoard";
import AlertProvider from "./contextProvider/AlertProvider";
import AuthProvider from './contextProvider/AuthProvider';
import Alert from "./Components/Alert";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AlertProvider>
          <Alert />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/chats" element={<ChatBoard />} />
          </Routes>
        </AlertProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
