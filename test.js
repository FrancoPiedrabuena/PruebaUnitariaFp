const { sum } = require('./app.js');

test ('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    module.exports = { sum, fromEuroToDollar }})

    test("One Dollar should be 127.9 yenez", function(){
        // importo la funcion desde app.js
        const { fromDollarToYen } = require('./app.js')
        
        // hago mi comparacion (la prueba)
        module.exports = { sum, fromDollarToYen }})
    
        test("One Yenes should be 0.8 british pound", function(){
            // importo la funcion desde app.js
            const { fromYenToPound } = require('./app.js')
            
            // hago mi comparacion (la prueba)
            module.exports = { sum, fromYenToPound }})