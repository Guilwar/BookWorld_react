const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

const userRoutes = require("./routes/userRoutes.js");
const categoryRoutes = require("./routes/categoryRoutes");
const bookRoutes = require("./routes/bookRoutes.js");

app.use(express.json());

app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/book", bookRoutes);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
