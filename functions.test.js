const functions = require('./functions');
let capitalize = functions.capitalize;
let reverse = functions.reverse;
let calculator = functions.calculator;
let caesar = functions.caesar;
let analyze = functions.analyze;

test('capitalizes first letter of input', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('reverse input', () => {
    expect(reverse('hello')).toBe('olleh');
});

test('performs arithmetic', () => {
    expect(calculator.add(2, 15)).toBe(17);
});

test('rot13 caesars cipher', () => {
    expect(caesar('hElloZ')).toBe('uRyybM');
});

test ('array analyzer', () => {
    expect(analyze([1, 2, 3, 4])).toMatchObject({
        average: 2.5, 
        min: 1, 
        max: 4, 
        length: 4
    })
})