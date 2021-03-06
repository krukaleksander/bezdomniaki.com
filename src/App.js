import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Page from "./pages/Page";
import Article from "./pages/Article";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categories/:link">
            <Category />
          </Route>
          <Route path="/details/:link">
            <Article />
          </Route>
          <Route path="/articles/:link">
            <Page />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
