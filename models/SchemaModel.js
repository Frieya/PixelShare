var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	fileUpload: String,
	title: String,
	description: String,
	keyword: String

});

var SigninSchema = new mongoose.Schema({
  client_username: String,
  client_password: String

});

var SignupSchema = new mongoose.Schema({
  email: String,
  password: String,
  conf_password: String

});

var UserinfoSchema = new mongoose.Schema({
  fullname: String,
  username: String,
  password: String,
  conf_password: String,
  birthday: String,
  email: String

});

module.exports = mongoose.model('Post', PostSchema);
module.exports = mongoose.model('Signin', SigninSchema);
module.exports = mongoose.model('Signup', SignupSchema);
module.exports = mongoose.model('Userinfo', UserinfoSchema);
