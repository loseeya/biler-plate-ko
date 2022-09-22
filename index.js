const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

const { User } = require("./Models/User");

const config = require("./config/key");

mongoose
	.connect(config.mongoURI)
	.then(() => console.log("MongoDB Connected"))
	.catch((error) => console.log(error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hello Express!!!");
});

app.post("/register", (req, res) => {
	const user = new User(req.body);
	user.save((err, doc) => {
		if (err) return res.json({ success: false, err });
		return res.status(200).json({ success: true });
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
