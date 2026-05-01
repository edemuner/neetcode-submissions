class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let greatestSoFar = 0;
        const startingPoint = arr.length - 1;
        for (let i = startingPoint ; i >= 0; i--){
            const item = arr[i];
            if (i === startingPoint){
                arr[i] = -1;
                if (item > greatestSoFar){
                    greatestSoFar = item;
                }
                continue;
            }

            if (item < greatestSoFar){
                arr[i] = greatestSoFar;
            }

            if (item > greatestSoFar){
                arr[i] = greatestSoFar;
                greatestSoFar = item;
            }
        }
        return arr;
    }
}
