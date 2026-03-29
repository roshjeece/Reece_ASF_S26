function isPalindrome(input) {
    if (typeof input !== 'string') return false;
    const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '')
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

module.exports = isPalindrome;