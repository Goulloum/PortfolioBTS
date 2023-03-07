import React from "react";
import ReactDOM from "react-dom";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(

    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>,

  document.getElementById("root")
);
