const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userDetails.routes");
const cors = require("cors");

const app = express();
const port = 8989;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://adarshahalder02:adarsha123@cluster0.xsarf3h.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("connection error:", err));

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
