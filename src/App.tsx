import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import React from "react";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/detail/:name/:id" component={Detail} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}
