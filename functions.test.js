const {stringLength, reverseString, Calculator,capitalizeString} = require('./functions')

const calculator = new Calculator(); 

test('Testing to see the length for some strings', () => {
    expect(stringLength('food')).toBe(4);
    expect(stringLength(' ')).toBe(1);
});

test('Testing to see the length for some strings between 1 and 10', () => {
    expect(stringLength('')).toBe(undefined);
    expect(stringLength(' ')).toBe(1);
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('0123467981')).toBe(10);
    expect(stringLength('123467981kjfkjdhf')).toBe(undefined);
});

test('Testing to see the reverse of some strings', () => {
    expect(reverseString('food')).toBe('doof');
    expect(reverseString('Hello')).toBe('olleH');
});

describe('Calculator add method', () => {
    test('Adding 1 and 2 is equal to 3', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('Adding 0 and 0 is equal to 0', () => {
        expect(calculator.add(0, 0)).toBe(0);
      });
    
      test('Adding 0.5 and 0.5 is equal to 1', () => {
        expect(calculator.add(0.5, 0.5)).toBe(1);
      });
  });

  describe('Calculator substract method', () => {
    test('substracting 2 from 1 is equal to ', () => {
      expect(calculator.substract(1, 2)).toBe(-1);
    });
    test('substracting 1 from 2 is equal to ', () => {
        expect(calculator.substract(2, 1)).toBe(1);
    });
    test('substracting 50 from 50 is equal to ', () => {
        expect(calculator.substract(50, 50)).toBe(0);
    });   
});

describe('Calculator divide method', () => {
    test('dividing 5 by 5 is equal to ', () => {
      expect(calculator.divide(5, 5)).toBe(1);
    });

    test('dividing 5 by -5 is equal to ', () => {
        expect(calculator.divide(5, -5)).toBe(-1);
    });

    test('dividing 5 by 5 is equal to ', () => {
        expect(calculator.divide(25, 5)).toBe(5);
    }); 
});

describe('Calculator multiply method', () => {
    test('multiply 5 by 5 is equal to ', () => {
      expect(calculator.multiply(5, 5)).toBe(25);
    });

    test('multiplying 5 by -5 is equal to ', () => {
        expect(calculator.multiply(5, -5)).toBe(-25);
    });

    test('multiplyinh 10 by 21 is equal to ', () => {
        expect(calculator.multiply(10, 21)).toBe(210);
    }); 
});


describe('Testing capitalizeString Method', () => {
    test('"hello" becomes "Hello"', () => {
      expect(capitalizeString("hello")).toBe('Hello');
    });

    test('"hayet" becomes "Hayet"', () => {
        expect(capitalizeString("hayet")).toBe('Hayet');
    });
});
