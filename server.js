// Modules, PORT, and routing

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const routes = require("./routes")


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

// Access to html, css, and js

app.use(express.static("public"));

// Logs which port gets used
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
