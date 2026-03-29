const isPalindrome = require('./isPalindrome');

describe('isPalindrome -- reject wrong datatypes', () => {
    test('returns false for a number', () => {
        expect(isPalindrome(121)).toBe(false);
    });

    test('returns false for an array', () => {
        expect(isPalindrome(['r', 'a', 'c', 'e', 'c', 'a', 'r'])).toBe(false);
    });

    test('returns false for a boolean', () => {
        expect(isPalindrome(true)).toBe(false);
    })

    test('returns false for an object', () => {
        expect(isPalindrome({ word: 'racecar' })).toBe(false);
    })

    test('returns false for null', () => {
        expect(isPalindrome(null)).toBe(false);
    })

    test('returns false for undefined', () => {
        expect(isPalindrome(undefined)).toBe(false);
    });
});