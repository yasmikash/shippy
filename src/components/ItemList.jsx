import { connect } from "react-redux";
import { Component } from "react";

import { fetchItems, addToCart } from "../store";
import Item from "./Item";

class ItemList extends Component {
  componentDidMount() {
    const { cart } = this.props;

    if (!cart.length) this.props.fetchItems();
  }

  // componentDidUpdate() {
  //   console.log(this.props);
  //   console.log("Re-renders => ItemsList");
  // }

  renderItems() {
    const { items } = this.props;
    return items.map((item) => (
      <Item key={item.id} item={item} addToCart={this.props.addToCart} />
    ));
  }

  render() {
    const { items } = this.props;
    return (
      <div className="card-columns">
        {items.length ? this.renderItems() : null}
      </div>
    );
  }
}

// everything will be merged to props object

/**
 * if not passed, dispatch will be receiced as props
 */
// const mapDispatchToProps = { fetchItems, addToCart };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     fetchItems: () => {
//       console.log("fetchItem is called");
//       dispatch(fetchItems(ownProps.clothing));
//     },
//   };
// };

const mapDispatchToProps = {
  fetchItems,
  addToCart,
};

/**
 * this will be called aytime store updates
 * when called with ownProps function exectutes on every props receives to the wrapper component
 */
const mapStateToProps = (state, ownProps) => {
  // console.log("mapStateToProps => ItemList");
  return {
    items: state.items,
    cart: state.cart,
  };
};

// { ...ownProps, ...stateProps, ...dispatchProps }

export default connect(
  mapStateToProps,
  mapDispatchToProps /*, mergeProps, options */,
  null
)(ItemList);
