/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.collection = []
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    let index = this.collection.indexOf(val)
    this.collection.push(val)
    return index == -1
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    let index = this.collection.indexOf(val)
    if(index > -1){
        this.collection[index] = this.collection[this.collection.length - 1]
        this.collection.length--
    }
    return index > -1
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    return this.collection[Math.floor(this.collection.length * Math.random())]
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

let a = new RandomizedCollection
console.log('1. collection now is ', a.collection.join(','))
console.assert(true == a.insert(1), 'true == a.insert(1)' + ':' + a.collection.join(','))
console.log('2. collection now is ', a.collection.join(','))
console.assert(false == a.remove(2), 'false == a.remove(2)' + ':' + a.collection.join(','))
console.log('3. collection now is ', a.collection.join(','))
console.assert(true == a.insert(2), 'true == a.insert(2)' + ':' + a.collection.join(','))
console.log('4. collection now is ', a.collection.join(','))
console.assert(1 == a.getRandom(), '1 == a.getRandom()' + ':' + a.collection.join(','))
console.log('5. collection now is ', a.collection.join(','))
console.assert(true == a.remove(1), 'true == a.remove(1)' + ':' + a.collection.join(','))
console.log('6. collection now is ', a.collection.join(','))
console.assert(false == a.insert(2), 'false == a.insert(2)' + ':' + a.collection.join(','))
console.log('7. collection now is ', a.collection.join(','))
console.assert(2 == a.getRandom(), '2 == a.getRandom()' + ':' + a.collection.join(','))


/*
https://leetcode-cn.com/submissions/detail/120007966/

20201031 19:55
执行用时：196 ms, 在所有 JavaScript 提交中击败了48.28%的用户
内存消耗：45.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户
*/