class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let results = [];
        for (let i = 0; i < operations.length; i++){
            const operation = operations[i];
            if(operation === '+'){
                const latestScore = results[results.length - 1];
                const theScoreBeforeLatest = results[results.length - 2];
                results.push(latestScore + theScoreBeforeLatest);
            } else if (operation === 'D') {
                const latestScore = results[results.length - 1];
                results.push(latestScore * 2);
            } else if (operation === 'C'){
                results.pop();
            } else {
                results.push(Number(operation));
            }
        }
        
        return results.length ? results.reduce((accumulator, current) => accumulator + current) : 0;
    }
}
