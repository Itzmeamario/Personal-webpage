import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "../../client/routes/Routes";
import { StaticRouter } from "react-router-dom";


// Since it's a static router it doesn't look at the url
// We need to give it the url that the user is trying to load
// That's why we pass the req.path (the actual url)
export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );

  // In this html we're telling the browser to download the bundle.js made in public
  // Also giving in the server side rendered content
  // We are not appending all the location, because we set up a static directory up there
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
