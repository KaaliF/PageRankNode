var assert = require('assert');
const {
    addNode,
    addEdge,
} = require("../models/Graph");

describe('addNode', function () {
    it('should not add the node', function () {
        addNode('E');
        assert.throws(function () {
            addNode('E')
        }, 'Error: Cant repeat node');
    });
});
describe('addEdge', function () {
    it('should not add the Edge', function () {
        assert.throws(function () {
            addEdge('E', 'E')
        }, 'Invalid Object');
    });
});