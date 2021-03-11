import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { incrementCount } from "../store";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Shoppy
      </Link>
      <Link className="btn btn-primary" to="/checkout">
        Checkout <span className="badge badge-light">{cart.length}</span>
      </Link>
      <button
        onClick={() => dispatch(incrementCount())}
        type="button"
        className="btn btn-primary"
      >
        Increment Counter <span className="badge badge-light">{counter}</span>
      </button>
    </nav>
  );
};

export default Header;
