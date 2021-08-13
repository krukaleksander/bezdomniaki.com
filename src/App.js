import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import SinglePage from "./pages/SinglePage";
import Article from "./pages/Article";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
          <Route path="/categories/:id">
            <Category />
          </Route>
          <Route path="/details/:id">
            <Article />
          </Route>
          <Route path="/page/:id">
            <SinglePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
