const wordCounter = require('../src/wordCounter')

test('returns 0 for an empty string', () => {
    expect(wordCounter("")).toBe(0)
})

test('returns 1 for a single word', () => {
    expect(wordCounter("hello")).toBe(1)
})

test('returns 2 for two words', () => {
    expect(wordCounter("hello world")).toBe(2)
})

test('ignores leading spaces', () => {
    expect(wordCounter(" hello")).toBe(1);
})

test('ignores trailing spaces', () => {
    expect(wordCounter("hello "))
})

test('handles multiple interior spaces as one separator', () => {
    expect(wordCounter("hello   world")).toBe(2);
})