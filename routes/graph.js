const express = require("express");
const router = express.Router();

const {
  addNode,
  addEdge,
  pageRank,
  getGraph,
  clearGraph
} = require("../models/Graph");
// get for admin to get all the users

router.get("/", async (req, res) => {

  return res.status(200).send(getGraph());
});
router.post("/addnode", async (req, res) => {
  try {
    const graph = addNode(req.body.node);
    return res.status(200).send(graph);
  } catch (e) {
    return res.status(400).send(e);
  }

});
router.post("/addedge", async (req, res) => {

  try {
    const graph = addEdge(req.body.from, req.body.to);
    return res.status(200).send(graph);
  } catch (e) {
    return res.status(400).send(e);
  }

});
router.put("/clear", async (req, res) => {
  try {
    const graph = clearGraph();
    return res.status(200).send(graph);
  } catch (e) {
    return res.status(400).send(e);
  }

});
router.get("/pagerank", async (req, res) => {

  return res.status(200).send(pageRank());

});

module.exports = router;