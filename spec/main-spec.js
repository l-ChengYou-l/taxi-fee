const taxiFee = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it('return price within 2km',function(){
        let inputs = {distance:1.5,parkTime:4}
        let summary = taxiFee(inputs)
        let expected = 7
        expect(summary).toEqual(expected)
    });
    it('return price between 2~8km',function(){
        let inputs = {distance:6,parkTime:4}
        let summary = taxiFee(inputs)
        let expected = 10.2
        expect(summary).toEqual(expected)
    });
    it('return price over 8km',function(){
        let inputs = {distance:20,parkTime:8}
        let summary = taxiFee(inputs)
        let expected = 27.2
        expect(summary).toEqual(expected)
    });
});
