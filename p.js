function outerFunction() {
    let outerVariable = 'I am from the outer function';
    
    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
    }
    
    return innerFunction; // Returning the inner function
}

const innerFunc = outerFunction(); // innerFunc now holds a reference to the inner function

// Even though outerFunction has finished executing,
// innerFunc still has access to the outerVariable due to closure
innerFunc(); // Output: I am from the outer function
