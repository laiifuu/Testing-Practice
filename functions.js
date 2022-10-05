function stringLength(string){
    if(string.length >= 1 && string.length <= 10){
        return string.length;
    }
}

function reverseString(string){
    return string.split('').reverse().join('');
}

class Calculator {
    add(a, b){
        return a + b;
    }

    substract(a, b){
        return a - b;
    }

    divide(a, b){
        return a / b;
    }

    multiply(a, b){
        return a * b;
    }
}

function capitalizeString(string){
    let arr = string.split('');
    arr[0] = arr[0].toUpperCase(); 
    return arr.join('');
}

module.exports = {stringLength, reverseString, Calculator, capitalizeString};