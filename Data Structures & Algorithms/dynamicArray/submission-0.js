class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        if (capacity > 0){
            this.capacity = capacity;
        } else {
            throw new Error('Capacity must be above zero.')
        }
        this.array = [];
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        if(i + 1 <= this.capacity){
            return this.array[i];
        }
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        if(i + 1 <= this.capacity){
            this.array[i] = n;
        } else {
            this.resize();
            return this.set(i, n);
        }
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.array.length >= this.capacity){
            this.resize();
        }
        this.array.push(n);
    }

    /**
     * @returns {number}
     */
    popback() {
        return this.array.pop();
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = 2 * this.capacity;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.array.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}


[1,3]
