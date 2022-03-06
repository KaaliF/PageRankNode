const graph = {
  nodes: [],
  link: []
}
let rank = {};
module.exports.getGraph = function () {
  return graph;
}
// add the node to graph
module.exports.addNode = function (node) {
  rank = {};
  if (graph.nodes.includes(node))
    throw new Error('Cant repeat node');
  graph.nodes.push(node);
  return graph;

}

// adds the edge to graph
module.exports.addEdge = function (a, b) {
  rank = {};
  if (a === b)
    throw new Error('Cant add vertice to same node');
  if (a === '' || b === '')
    throw new Error('Invalid Request');
  const obj = {
    from: a,
    to: b
  }

  graph.link.forEach((item) => {

    if (item.from === obj.from && item.to === obj.to)
      throw new Error('Cant repeat vertice');

  });

  graph.link.push(obj);
  return graph;
}
// Clears the graph
module.exports.clearGraph = function () {
  graph.nodes = [];
  graph.link = [];
  return graph;
}
// calculate the pagerank of the given node.
function calcultePageRank(node) {
  const to = NodeTo(node);
  const outBound = to.map((tonode) => NodeFrom(tonode));
  let value = 0;
  const damping = 0.85;
  to.forEach((item, index) => {

    if (rank[item] === undefined)
      value += (1 / outBound[index].length)
    else {
      value += (rank[item] / outBound[index].length)
    }
  });

  return (1 - damping) + (damping * value);
}
// apply the page rank to all graph
module.exports.pageRank = function () {
  graph.nodes.forEach((node) => {

    rank[node] = calcultePageRank(node)
  });
  return rank;
}
// Get the all inbounds to given node.
function NodeTo(node) {
  return graph.link.reduce((arr = [], vertice) => {
    if (vertice.to === node) {
      arr.push(vertice.from);
    }
    return arr;
  }, [])
}
// get all outbounds to given node.
function NodeFrom(node) {
  return graph.link.reduce((arr = [], vertice) => {
    if (vertice.from === node) {
      arr.push(vertice.to);
    }
    return arr;
  }, [])
}