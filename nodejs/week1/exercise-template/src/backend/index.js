// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const path = require("path");
const addHead = require("./add_head");

app.get("/", (request, response) => {
  const head = addHead("Home");
  response.send(
    head +
      `
    <body>
        <h1>My portfolio</h1>
    </body>
  `
  );
});

app.get("/contact", (request, response) => {
  const head = addHead("Contact");
  response.send(
    head +
      `
  <head>
  <title>Contact</title>
  </head>
    <body>
        <h1>Contact</h1>
        <p>This is a contact page</p>
    </body>
  `
  );
});
app.get("/education", (request, response) => {
  const head = addHead("Education");
  response.send(
    head +
      `
  
    <body>
        <h1>Education</h1>
        <p>This is a education page</p>
    </body>
  `
  );
});
app.get("/skills", (request, response) => {
  const head = addHead("Skills");
  response.send(
    head +
      `
    <body>
        <h1>Skills</h1>
        <p>This is a skills page</p>
    </body>
  `
  );
});
app.get("/projects", (request, response) => {
  const head = addHead("Projects");
  response.send(
    head +
      `
    <body>
        <a href="https://github.com/zmzade/hyf-homework" class="codeUrl"> Project Link</a>
        <h1>Projects</h1>
        <p>This is a skills page</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Shaw%2C_Royton%2C_Oldham_and_Manchester_from_Crompton_Moor.jpg"

    </body>
  `
  );
});
app.get("/test-report", function (requset, response) {
  response.sendFile(path.join(__dirname + "/test-report.html"));
});

const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
