const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);
console.log(A.union(B))
console.log(A.intersection(B))
console.log(A.difference(B))
console.log(A.symmetricDifference(B))