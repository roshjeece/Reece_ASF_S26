function wordCounter(input) {
    if (input.trim() === "") return 0;

    const words = input.trim().split(/\s+/);

    return words.length;
}

module.exports = wordCounter;