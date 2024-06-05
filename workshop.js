function isValidParentheses(str) {
    const stack = [];
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    for (let char of str) {
        if (pairs[char]) {
            stack.push(char);
        } else if (char === ")" || char === "]" || char === "}") {
            if (!stack.length || pairs[stack.pop()]!== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example usage
const inputString = "()";
console.log(`Is it a valid Parenthesis? : ${isValidParentheses(inputString)}`); // Output: Is it a valid Parenthesis? : true
