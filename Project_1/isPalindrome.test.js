const isPalindrome = require('./isPalindrome');

describe('isPalindrome -- reject wrong datatypes', () => {
    test('returns false for a number', () => {
        expect(isPalindrome(121)).toBe(false);
    })
})