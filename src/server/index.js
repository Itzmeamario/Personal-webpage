// Webpack will grab all of the code from these modules and pull all the library into the library
// to avoid this in the server we modify the server webpack.
import express from "express";
import renderer from "./helpers/renderer"
import env from "dotenv";

const p = env.config();

const app = express();

// we tell express that the public folder should be public to everyone
// this is done so that the bundle.js can be downloaded by the browser
app.use(express.static("src/client/public"));

// Handle all routes with server side rendering
app.get("*", (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
