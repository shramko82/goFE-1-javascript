function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var running = false;
    var enabled = false;

    this.enable = function () {
        enabled = true
    };
    this.disable = function () {
        enabled = false
    };

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    function onReady() {
        console.log( 'Кофе готов!' );
    }

    this.run = function() {
        if (!enabled) {
            throw new Error('Please, turn on your coffee machine!');
        }
        running = true;
        setTimeout(function(){
            running = false;
            onReady();
        }, getTimeToBoil());
    };

    this.setOnReady = function(func) {
        onReady = func;
    };

    this.isRunning = function() {
        return running;
    };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!