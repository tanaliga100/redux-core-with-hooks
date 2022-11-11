import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Products from "./components /Products";
import ProductDetails from "./components /ProductDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Panel from "./components /Panel";
import Main from "./components /Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3
          style={{
            padding: "0 1rem",
          }}
        >
          Lazamo
        </h3>
      </header>
      <div className="pa3 pa4-ns dtc-ns v-mid ">
        <div>
          <h2 className="fw4 blue mt0 mb3" style={{ color: "crimson" }}>
            E - commerce Site for your business{" "}
          </h2>
          <p className="black-50 measure lh-copy mv0 ">
            These are the lists of all the products
          </p>
        </div>
      </div>
      <Main>
        <Panel />
        <Router>
          <Switch>
            <Route path="/" exact component={Products} />
            <Route
              path="/product/:productID"
              exact
              component={ProductDetails}
            />
          </Switch>
        </Router>
      </Main>
    </div>
  );
}
export default App;
