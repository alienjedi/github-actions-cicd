const {add, sub, fetchData} = require('./index');


test('should add all numbers together', () => {
    expect(add(2,5,3,1)).toEqual(11);
});

test('should substract numbers', () => {
    expect(sub(2,-2,1)).toEqual(3);
});

/*
 * test('should return a failed request', callback => {
    try {
        fetchData();
        expect(payload).toMatch(/credits/ig);
        callback();
    } catch(errr) {
        expect(err).tomatch(/Error/ig);
    }
    fetchData();
});
*/
