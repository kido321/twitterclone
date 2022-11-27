import "./App.css";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed";
import Widgets from "./Widgets.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Login from "./Login.js";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div classname="App">
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
