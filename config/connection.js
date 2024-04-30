const { default: mongoose } = require("mongoose");

const db_conection = () => {
  mongoose
  .connect('mongodb+srv://joeninja_ca:cantil3ver@cluster0.v8qxrw7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch((e) => console.error(e));

}

module.exports = db_conection;