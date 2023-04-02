const mongoose = require("mongoose");
const app = require("./app");

// const { DB_HOST, PORT = 3001 } = process.env;
// const { DB_HOST, PORT = 3001 } = require("./config");

// TODO: delete down
const DB_HOST =
  "mongodb+srv://Dmytro:i05Re0fWBfDNKBQj@cluster0.lhirhjw.mongodb.net/db-yummy?retryWrites=true&w=majority";
const PORT = 3001;
// TODO: delete up

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
