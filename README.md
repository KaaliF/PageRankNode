**Installation Instructions**

•	Clone the application

•	Do npm install

•	Do npm start

•	App will run on localhost:8000


**Use Instructions**

•	addNode('E') adds the node to graph and return the grapgh. 

•	addEdge('E','A') add the edge to E and A node and return the grapgh. 

•	getGraph() will give you the current state of graph, after adding the node and vertice define above the graph will be like,

{
    "nodes": [
        "E",
        "A"
    ],
    "link": [{from:"E",to:"A"}]
}

•	pageRank() function will calculte the page rank of the nodes. 

•	clearGraph() function will reset the graph to 

{
    "nodes": [],
    "link": []
}

**Limitations**

•	Validations can be improved.

•	Cant delete a node

•	Page rank is calculated up to accuracy to one interation.


