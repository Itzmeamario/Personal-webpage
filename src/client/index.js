import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage";

// Hydrate allows react to keep on filling in the html template handed by the server
// (instead of re rendering on top of html)
// Because of this js(handlers) is injected into the neccessary places
// and other stuff like state
ReactDOM.hydrate(<HomePage />, document.getElementById("root"));
