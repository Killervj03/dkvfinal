const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {

  output=`
  <p>You have a new contact request</p>
  <h3>Contact details</h3>
  <ul>
  <li>Name: ${req.body.mailerState.name}</li>
  <li>Mobile Number: ${req.body.mailerState.number}</li>
  <li>Email: ${req.body.mailerState.email}</li>
  <li>Message: ${req.body.mailerState.message}</li>
  </ul>`

  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `Query from DKV Website: ${req.body.mailerState.email}`,
      html:output,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {

      res.json({
        status: "fail",
      });
    } else {
      console.log("Email sent successfully");
      res.json({
        status: "Email sent",
      });
    }

  });

});
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);

});
const submitEmail = async (e) => {
  e.preventDefault();
  console.log({ mailerState });
  const response = await fetch("http://localhost:4000/send", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ mailerState }),
  })
    .then((res) => res.json())
    .then(async (res) => {
      const resData = await res;
      console.log(resData);
      if (resData.status === "success") {
        alert("Message Sent");
      } else if (resData.status === "fail") {
        alert("Message failed to send");
      }
    })
    .then(() => {
      setMailerState({
        email: "",
        name: "",
        message: "",
        number:"",
      });
    });
};
