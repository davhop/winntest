let assert = require('assert');
let Transport = require('../api/model/transport.js');

/** test de la fonction vehicle()  */
function vehicle(v){
    return Transport.vehicle(v);
}
describe('vehicle()',function(){
    let tests = [
        {args: 'car', expected: 'driving'},
        {args: 'foot', expected: 'walking'},
        {args: 'bike', expected: 'bicycling'}
    ];
    tests.forEach(function(test){
        it('return corresponding transport mode for google request',function(){
            let res = vehicle.apply(null,[test.args]);
            assert.equal(res, test.expected);
        });
    });
});

/** test de la fonction position()   */
function position(lat,lon){
    return Transport.position(lat,lon);
}
describe('position()',function(){
        it('return corresponding position place_id and formatted_address from google maps',function(){
            let res = position(47.083915,1.346552);
            assert.equal(res.place_id, 'ChIJY5ZZ5gNh-0cRfNEwxETBGgc');
            assert.equal(res.formatted_address,'36240 Écueillé, France');
        });
    });
