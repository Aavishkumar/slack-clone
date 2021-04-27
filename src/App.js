import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Login';
import { useStateValue } from "./StateProvider";

function App() {
  // const [user,setUser] =useState(null);
  const [{ user },dispatch] = useStateValue();

  return (
    <div className="app">
      <Router> 
      {!user ? (
        <Login/>
      ):(
        // <Login>
        <>
      <Header />
      <div className="app_body">
        <Sidebar />

        <Switch>
          <Route path="/room/:roomId">
            <Chat />
          </Route>
          <Route path="/">
            <h1>Welcome</h1>
          </Route>
        </Switch>
        {/* React-Router--> Chat screen */}
        </div>
        {/* </Login> */}</>
      )}
      </Router>
    </div>
  );
}

export default App;
