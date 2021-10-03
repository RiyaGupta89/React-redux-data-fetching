import './App.css';
import { Provider } from "react-redux"
import store from "./redux/store"
import Header from "./containers/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/productId" exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
