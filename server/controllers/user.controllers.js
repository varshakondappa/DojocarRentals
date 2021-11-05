const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  register: (req, res) => {
    console.log("In register");
    console.log(req.body);
    const user = new User(req.body);
    user
      .save()
      .then((newUser) => {
        console.log(newUser);
        console.log("Successfully registered");
        res.json({
          message: "Successfully registered",
          user: newUser,
        });
      })
      .catch((err) => {
        console.log("Register Unsuccessfull");
        res.status(400).json(err);
      });
  },
  login: (req, res) => {
    User.findOne({ email: req.body.email })
      .then((userRecord) => {
        if (userRecord === null) {
          res.status(400).json({ message: "Invalid login attempt" });
        } else {
          bcrypt
            .compare(req.body.password, userRecord.password)
            .then((isPasswordValid) => {
              if (isPasswordValid) {
                console.log("Password is Valid");
                // console.log(usertoken);
                // console.log(process.env.JWT_SECRET);
                res
                  .cookie(
                    "usertoken",
                    jwt.sign(
                      {
                        user_id: userRecord._id,
                        email: userRecord.email,
                      },
                      process.env.JWT_SECRET
                    ),
                    {
                      httpOnly: true,
                      expires: new Date(Date.now() + 900000),
                    }
                  )
                  .json({
                    message: "Successfully logged in",
                    userLoggedIn: userRecord.firstName,
                  });
              } else {
                res.status(400).json({ message: "Invalid login attempt" });
              }
            })
            .catch((err) => {
              console.log("error with comapreing passwords");
              res.status(400).json({ message: "Invalid Login Attempt" });
            });
        }
      })
      .catch((err) => {
        console.log("error with fin one");
        res.status(400).json({ message: "Invalid Login Attempt" });
      });
  },
  logout: (req, res) => {
    console.log("logging out");
    res.clearCookie("usertoken");
    res.json({ message: "you have succcessfully logged out" });
  },
};
