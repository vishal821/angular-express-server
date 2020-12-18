const Mongoose = require("mongoose");
const connection = Mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => console.log('Connected to MongoDB ...'))
.catch(err => console.error('Could not connect to MongoDB:â€Œ', err));
Mongoose.set('useCreateIndex', true);
