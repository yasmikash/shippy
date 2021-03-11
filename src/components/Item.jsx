const Item = ({ item, addToCart }) => {
  const { name, details } = item;

  return (
    <div className="card">
      <img className="card-img-top" src={details.image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <div className="card-footer">
        <button
          onClick={() => addToCart(item)}
          type="button"
          className="btn btn-primary"
        >
          ${details.price} BUY
        </button>
      </div>
    </div>
  );
};

export default Item;
