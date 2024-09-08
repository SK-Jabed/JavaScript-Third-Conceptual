/*

Bus = 50
Noah = 15
Rickshaw cost = 20 taka 

People = 234
Bus (4) = 200 ==> remaining = 34
Noah (2) = 30 ==> remaining = 4
Rickshaw (4) = 20 * 4 = 80 taka

*/

function rickshawVara(peoples) {
    const bus = 50;
    const noah = 15;
    const rickshawCost = 20;

    const remainAfterBus = peoples % bus;

    const remainAfterNoah = remainAfterBus % noah;
}

console.log();