import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Products from "./components /Products";
import ProductDetails from "./components /ProductDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Panel from "./components /Panel";
import Main from "./components /Main";
import Nav from "./components /Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header tracked">
        <h3
          style={{
            padding: "0 1rem",
          }}
          className="fw9"
        >
          Lazamo
        </h3>
        <Router>
          <Nav />
        </Router>
      </header>
      <div className="pa3 pa4-ns dtc-ns v-mid "></div>
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
