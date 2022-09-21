const express = require("express");
const app = express();
const port = 4000;

const mongoose = require("mongoose");

mongoose
	.connect(
		"mongodb+srv://MinKuk:a5451624@cluster0.aoiqqmm.mongodb.net/?retryWrites=true&w=majority"
	)
	.then(() => console.log("MongoDB Connected"))
	.catch((error) => console.log(error));

app.get("/", (req, res) => {
	res.send("Hello Express");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
