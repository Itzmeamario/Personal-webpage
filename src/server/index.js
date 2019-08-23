// import express from "express";
// import React from "react";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import HomePage from "../client/pages/HomePage"

const app = express();

// we tell express that the public folder should be public to everyone
// this is done so that the bundle.js can be downloaded by the browser
app.use(express.static('src/client/public'))

// Handle all routes with server side rendering
app.get("/", (req, res) => {
  const content = renderToString(<HomePage />)

  // In this html we're telling the browser to download the bundle.js made in public
  // Also giving in the server side rendered content
  // We are not appending all the location, because we set up a static directory up there
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html)
})

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
