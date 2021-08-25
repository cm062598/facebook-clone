import React from "react";

// Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Topnav from "./components/Topnav/Topnav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

// Firebase
import { auth } from "./components/firebase";

// React Firebase Hooks
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Router>
      {/* {loading && (
      )} */}

      {user ? (
        <Route path="/">
          <Topnav user={user} />
          <Home user={user} />
        </Route>
      ) : loading ? (
        <div>
          <h1>Loading....</h1>
        </div>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
