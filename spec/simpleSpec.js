/*  1. Write test for foobar.
*/ 

 var applyRules = require('../foobar.js')



describe('A simple rules system', function(){
    it('Given 7 expect bar', function(){
        expect(applyRules(7)).toBe('bar');
    });
});