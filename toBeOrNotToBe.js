/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    let initVal = val
    function toBe(val1) {
        if (initVal === val1) {
            return true
        } else {
            throw new Error("Not Equal")
        }
    }
    function notToBe(val2) {
        if (val2 !== initVal) {
            return true
        } else {
            throw new Error("Equal")
        }
    }
    return {
        toBe: toBe,
        notToBe: notToBe
    }
};


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */