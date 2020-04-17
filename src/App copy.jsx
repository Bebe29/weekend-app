import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "./views/screen/bootstrap.css";
import ProductItem from "./views/component/ProductItem";
import Handmaid from "./views/image/handmaid.jpg";
import Crazy from "./views/image/crazy.jpg";
import Brave from "./views/image/brave.jpg";
import Educated from "./views/image/educated.jpg";
import CounterScreen from "./views/screen/CounterScreen";
import AuthScreen from "./views/screen/AuthScreen";
import InputScreen from "./views/screen/InputScreen";
import LifecycleScreen from "./views/screen/LifecycleScreen";
import HomeScreen from "./views/screen/HomeScreen";
import ReactDOM from "react-dom";
import PageNotFound from "./views/screen/PageNotFound";
import Navbar from "./views/screen/Navbar";
import ProfileScreen from "./views/screen/ProfileScreen";

function App() {
  let arrProduct = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: Crazy,
      stock: 0
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3
    }
  ];

  const renderData = () => {
    return arrProduct.map(val => {
      return (
        <div className="col-md-6 p-0">
          <ProductItem dataProduct={val} />
        </div>
      );
    });
  };
  return (
    // <div className="App">
    //   <h1>Hello World!</h1>
    //   <div className="row m-0">
    //     {renderData()}
    //   </div>
    //   <CounterScreen />
    //   <InputScreen />
    //   <LifecycleScreen />
    // </div>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        {/* <Route path="/home" component={HomeScreen}/> */}
        <Route exact path="/counter" component={CounterScreen} />
        <Route exact path="/auth" component={AuthScreen} />
        <Route exact path="/input" component={InputScreen} />
        <Route exact path="/lifecycle" component={LifecycleScreen} />
        <Route exact path="/profile/:pikachu" component={ProfileScreen} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
}

export default withRouter(App);
