const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");

const graph = require("./routes/graph");

app.use(express.json());
app.use(cors());

app.use("/api/graph", graph);

const port = process.env.PORT || 8000;
http.listen(port, () => console.log(`Listinig ${port}`));