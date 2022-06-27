module.exports = function toReadable(number) {
    let numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };
    let result = "";
    let x = number;

    if (x == 0) {
        return numbers[0];
    }

    if (Math.trunc(x / 100) > 0) {
        result += numbers[Math.trunc(x / 100)] + " " + numbers[100];
        x %= 100;
    }

    if (Math.trunc(x / 10) == 1) {
        result += " " + numbers[Math.trunc(x)];
        return result.trim();
    }

    if (x > 19) {
        result += " " + numbers[Math.trunc(x / 10) * 10];
        x %= 10;
    }

    if (x != 0) {
        result += " " + numbers[x];
    }
    return result.trim();
};
