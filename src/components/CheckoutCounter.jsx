import React from "react";

const CheckoutCounter = ({ onClick }) => {
  console.log("Re-renders => CheckoutCounter");

  return (
    <div>
      <h3>Checkout Counter</h3>
      <button onClick={onClick} type="button" className="btn btn-primary">
        Increment Counter
      </button>
    </div>
  );
};

export default React.memo(CheckoutCounter);
