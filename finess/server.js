const { log } = require("console");
const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const { demand } = require("yargs");

const app = express();
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "finess",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  .promise();

app.get("/", async (req, res) => {
  res.render("landing");
});
app.post("/purchase", async (req, res) => {
  let { email, payment, plan, price, transac } = req.body;

  let [verifty] = await connection.query(
    "SELECT * FROM purchases WHERE email = ? AND plan = ?",
    [email, plan]
  );

  if (verifty.length === 0) {
    await connection.query(
      "INSERT INTO purchases (email,mop,plan,price,transactionID) VALUES (?,?,?,?,?)",
      [email, payment, plan, price, transac]
    );
    res.json({
      success: true,
      message: "submitted successfully pls wait for payment verification",
    });
  } else {
    res.json({
      success: false,
      message: "payment invalid or you already been subscribed",
    });
  }
});
app.post("/signup", async (req, res) => {
  let { email,password } = req.body;

  let [verifty] = await connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (verifty.length === 0) {
    await connection.query(
      "INSERT INTO users (email, password) VALUES (?,?)",
      [email, password]
    );
    res.json({
      success: true,
      message: "account created",
    });
  } else {
    res.json({
      success: false,
      message: "email is already registered",
    });
  }
});
app.get("/lobby", async(req, res) => {
  const email = req.query.email; 
  let [planss] = await connection.query("SELECT * FROM purchases where email = ?",[email])
  res.render("lobby", { email, planss});
});
app.post("/login", async (req, res) => {
  let { email,password } = req.body;
  let [verifty] = await connection.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password]
  );

app.get("/admin", async (req, res) => {
  const email = req.query.email; 
  let [purchase] = await connection.query("SELECT * FROM purchases")
  res.render("admin", { email, purchase });
});
  if(email === "admin@gmail.com" && password === "admin"){
    res.json({
      success: true,
      message: "welcome " + email,
      url: "/admin",
      email
    });
  }

  if (verifty.length === 0) {
   
    res.json({
      success: false,
      message: "wrong password",
    });
  } else {
     res.json({
      success: true,
      message: "welcome " + email,
      url: "/lobby",
      email
    });
  }
});



app.post('/verify', async (req, res) => {
  const { id } = req.body;
  try {
    await connection.query("UPDATE purchases SET status = 'approved' WHERE id = ?", [id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
});

module.exports = app;
