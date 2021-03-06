const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const session = require("express-session");
const path = require('path');
const app = express();


app.use(express.static('public'));

//EJS
app.set('layout', 'layouts/layout');
app.use(expressLayouts);


app.set("view engine", "ejs");


// Express body parser
app.use(express.urlencoded({ extended: false }));

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/dashboard", require("./routes/dashboard"));

const PORT = process.env.PORT || 80;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
