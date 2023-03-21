import React from "react";
import amazonLogo from "../logo/amazonLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Head.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Head() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className="head__container">
      {/* Logo  */}
      <Link to="/">
        <div className="logo">
          <img src={amazonLogo} alt="" />
        </div>
      </Link>

      {/* Search Bar  */}
      <div className="search__container">
        <input type="text" placeholder="Search Amazon" />
        <button>
          <SearchIcon className="logo" />
        </button>
      </div>

      {/* Nav Options  */}
      <div className="option__container">
          <Link className="link" to={!user && "/login"}>
        <div onClick={handleAuthentication} className="options">
            <span className="optionLineOne">Hello, {user ? user.email : "guest" }</span>
            <span className="optionLineTwo">{user? "Sign Out" : "Sign In" }</span>
        </div>
          </Link>
        <div className="options">
          <span className="optionLineOne">Returns</span>
          <span className="optionLineTwo">& Orders</span>
        </div>
        <div className="options">
          <span className="optionLineOne">Your</span>
          <span className="optionLineTwo">Prime</span>
        </div>
        <Link className="link" to="/checkout">
          <div className="optionBasket">
            <ShoppingBasketIcon />
            <span className="basketCount optionBasket_lineTwo">{ basket?.length }</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Head;
