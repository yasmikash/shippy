import { BrowserRouter, Route, Switch } from "react-router-dom";

import ItemList from "./ItemList";
import Checkout from "./Checkout";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container" style={{ marginTop: 70 }}>
          <Route path="/" exact component={ItemList} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
