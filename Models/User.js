const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: {
		type: String,
		maxlength: 20
	},
	email: {
		type: String,
		trim: true,
		unique: 1
	},
	password: {
		type: String,
		minlength: 5
	},
	lastname: {
		type: String,
		maxlength: 20
	},
	role: {
		type: Number,
		default: 0
	},
	image: String,
	token: {
		type: String
	},
	tokenExp: {
		// 토큰의 유효기간
		type: Number
	}
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
