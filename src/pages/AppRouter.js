import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "./pages/Blog";
import Images from "./pages/Images";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Images />
        </Route>
        <Route path="/blog/:id">
          <Blog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
