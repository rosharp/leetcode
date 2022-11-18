// Another way to see this problem is 'what is the minimum number of stones we can have remaining?'. To solve this, one must first realize that for any number of stones in a set, as long as they are connected to one other stone in the set by row or by col, they can be removed till only one stone is remaining.
//
// Hence we can find the number of remaining stones by finding the number of disjointed sets. From there, the maximum number of stones we can remove will be = total num of stones - remaining stones.
//
// The solution, first I get a mapping of all stones in each row and col. Then, for each new unvisited stone in the arr, do a dfs to mark all connected stones in the same row and same col as visited. In this way, every new unvisited stone in the arr will be a new disjoint set, hence we increment the remaining stones value by 1 when we reach a new unvisited stone.
 
function removeStones(stones) {
    const rows = new Map();
    const cols = new Map();
    for (const [r, c] of stones) {
        rows.set(r, (rows.get(r) || new Set()).add(c));
        cols.set(c, (cols.get(c) || new Set()).add(r));
    }
    
    const visited = new Set();
    const visit = (i, j) => {        
        const key = `${i}-${j}`;
        if (visited.has(key)) return;
        visited.add(key);
        const adjRow = rows.get(i);
        for (const col of adjRow) {
            visit(i, col);
        }
        const adjCol = cols.get(j);
        for (const row of adjCol) {
            visit(row, j);
        }
    }
    
    let remainingStones = 0;
    for (const [r, c] of stones) {
        const key = `${r}-${c}`;
        if (visited.has(key)) continue;        
        visit(r,c);
        remainingStones++;        
    }
    return stones.length - remainingStones;
};

