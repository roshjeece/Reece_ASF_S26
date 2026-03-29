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

describe('isPalindrome -- simple lowercase words', () => {
    test('"bob" is a palindrome', () => {
         expect(isPalindrome('bob')).toBe(true);
    })

    test('"racecar" is a palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
    })

    test('"apple" is NOT a palindrome', () => {
        expect(isPalindrome('apple')).toBe(false);
    })
})

describe('isPalindrome -- case insensitivity', () => {
    test('"Racecar" is a palindrome', () => {
        expect(isPalindrome('Racecar')).toBe(true);
    })

    test('"rAcEcAr" is a palindrome', () => {
        expect(isPalindrome('rAcEcAr')).toBe(true);
    })
})

describe('isPalindrome -- spaces and punctuation filter', () => {
    test('"Madam Im Adam." is a palindrome', () => {
        expect(isPalindrome("Madam I'm Adam.")).toBe(true);
    })

    test('"Red rum, sir, is murder." is a palindrome', () => {
        expect(isPalindrome('Red rum, sir, is murder.')).toBe(true);
    })

    test('"A man, a plan, a canal: Panama" is a palindrome', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    })

    test('"Never odd or even" is a palindrome', () => {
        expect(isPalindrome('Never odd or even')).toBe(true);
    })
})

describe('isPalindrome -- edge cases', () => {
    test('empty string returns true', () => {
        expect(isPalindrome('')).toBe(true);
    })

    test('single character returns true', () => {
        expect(isPalindrome('J')).toBe(true);
    })

    test('string of only spaces and punctuation returns true after cleaning', () => {
        expect(isPalindrome(' . . . ')).toBe(true);
    })
})