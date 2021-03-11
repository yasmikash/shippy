import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeFromCart, incrementCount } from "../store";
import CheckoutCounter from "./CheckoutCounter";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // const onCounterIncrement = useCallback(() => {
  //   dispatch(incrementCount());
  // }, [dispatch]);

  const onCounterIncrement = () => {
    dispatch(incrementCount());
  };

  const renderCartList = () => {
    return cart.map((item) => (
      <li key={item.id} className="list-group-item">
        {item.name}
        <button
          onClick={() => dispatch(removeFromCart(item))}
          type="button"
          className="btn btn-danger"
        >
          Remove
        </button>
      </li>
    ));
  };

  return (
    <div>
      {cart.length ? (
        <ul className="list-group list-group-flush">{renderCartList()}</ul>
      ) : null}
      <CheckoutCounter onClick={onCounterIncrement} />
    </div>
  );
};

export default Checkout;
