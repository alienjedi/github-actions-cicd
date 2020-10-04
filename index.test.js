const {add, sub} = require('./index');


test('should add all numbers together', () => {
    expect(add(2,5,3,1)).toEqual(11);
});

