import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Products from "./components /Products";
import ProductDetails from "./components /ProductDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ padding: "0 1rem", color: "white" }}>Redux-Shop</h3>
      </header>
      <Router>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:productID" exact component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
