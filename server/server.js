import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";

const PORT = 8000;
const app = express();

// Metadata for each route
const metadata = {
  "/about": {
    title: "About Us - Purple-Themed Website",
    description:
      "Learn more about us on the About Page of our Purple-Themed Website.",
  },
  "/services": {
    title: "Services - Purple-Themed Website",
    description:
      "Discover the services we offer on the Services Page of our Purple-Themed Website.",
  },
};

app.use(express.static(path.resolve(__dirname, "../build")));

app.get(["/", "/about", "/services"], (req, res) => {
  const indexFile = path.resolve("./build/index.html");

  fs.readFile(indexFile, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading index.html:", err.message);
      return res.status(500).send("Internal server error");
    }

    const routeMeta = metadata[req.path] || {
      title: "Default Title - Purple-Themed Website",
      description: "Default description for our Purple-Themed Website.",
    };

    const appHTML = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    const updatedHTML = data
      .replace("<title>React App</title>", `<title>${routeMeta.title}</title>`)
      .replace(
        '<meta name="description" content="Web site created using create-react-app"/>',
        `<meta name="description" content="${routeMeta.description}"/>`
      )
      .replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);

    res.send(updatedHTML);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
