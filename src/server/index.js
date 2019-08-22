// import express from "express";
// import React from "react";
const express = require("express");
const React = require("react")
import { renderToString } from "react-dom/server";
import HomePage from "../client/pages/HomePage"

const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<HomePage />)

  res.send(content)
})

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
