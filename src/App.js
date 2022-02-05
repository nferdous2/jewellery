import './App.css';
import React from "react";
import NotFound from './Components/Shared/NotFound/NotFound';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import { Route, Router, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AllProduct from './Components/Pages/HomeAll/AllProduct/AllProduct';
import Gold from './Components/Pages/AllProducts/Gold/Gold';
import Diamond from './Components/Pages/AllProducts/Diamond/Diamond';
import Stone from './Components/Pages/AllProducts/Stone/Stone';
import MyOrder from './Components/Pages/HomeAll/MyOrder/MyOrder';
import PurchasePage from './Components/Pages/HomeAll/PurchasePage/PurchasePage';
import RegPage from './Components/Pages/HomeAll/RegPage/RegPage';
import Login from './Components/Pages/HomeAll/Login/Login';
import DashboardBody from './Components/Dashboard/DashboardBody/DashboardBody';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/allProducts">
            <AllProduct />
          </Route>
          <Route path="/myOrder">
            <MyOrder />
          </Route>
          <Route path="/purchase/:serviceId">
            <PurchasePage />
          </Route>
          <Route path="/gold">
            <Gold />
          </Route>
          <Route path="/diamond">
            <Diamond />
          </Route>
          <Route path="/others">
            <Stone />
          </Route>
          <Route path="/dashboard">
            <DashboardBody />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <RegPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />

      </BrowserRouter>
      {/* <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;