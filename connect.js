const mongo_password = process.env.MONGO_PASSWORD;
console.log(mongo_password);
const mongoose = require('mongoose');
const uri = "mongodb+srv://dbblackturtlebay:${mongo_password}@blackturtlebay-3ni0l.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})
.catch(err => console.log(err));

//this connection works if the password is hardcoded in