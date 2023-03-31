import React, { useEffect } from "react";
import Head from "./Head";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Mp5zhSFmxVzUnfv6IypruLMrnRa7Pin9k8lSM4LnWOKgwLgqjDp0tJSqDKbKMMQi0tYpVXzen7klDVSJCwtPe1r00jbaQat0A"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app__container">
        <Routes>
          <Route
            path="/payment"
            element={
              <>
                {<Head />}
                {
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                }
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                {<Head />}
                {<Orders />}
              </>
            }
          />
          <Route path="/login" element={<>{<Login />}</>} />
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
