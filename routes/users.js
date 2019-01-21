const express = require("express");
var router = express.Router();

//Login Page
router.get("/login", (req, res) => res.render("Login"));
//Register Page
router.get("/register", (req, res) => res.render("Register"));

router.post("/register", (req, res) => {
  const { name, password, password2 } = req.body;
  let errors = [];

  if (!name || !password || !password2) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password != password2) {
    errors.push({ msg: "Passwort nicht identisch" });
  }

  if (password.length < 6 && !password.length == 0) {
    errors.push({ msg: "Passwort muss länger als 6 Zeichen sein" });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      password,
      password2
    });
  } else {
    res.send("pass");
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('"login');
});

module.exports = router;
