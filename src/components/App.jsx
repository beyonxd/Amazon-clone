import React, { useEffect } from "react";
import Head from "./Head";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        // the user just logged in / the user was logged in.
        dispatch({
          type: "SET_USER",
          user: authUser
        })


      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })

      }
    })
  }, [])

  return (
    <Router>
      <div className="app__container">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                {<Login />}
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <div>
                {<Head />}
                {<Checkout />}
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                {<Head />}
                {<Home />}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
