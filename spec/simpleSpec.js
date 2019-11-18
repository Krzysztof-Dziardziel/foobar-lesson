/*  1. Write test for foobar.
*/ 

 var applyRules = require('../foobar.js')



describe('A simple rules system', function(){
    it('Given 7 expect bar', function(){
        expect(applyRules(7)).toBe('bar');
    });
    it('Given 2 expect foo', function(){
        expect(applyRules(2)).toBe('foo');
    });
    it('Given 14 expect foobar', function(){
        expect(applyRules(14)).toBe('foobar');
    });
    it('Given 25 expect nothing', function(){
        expect(applyRules(25)).toBe('');
    });
});