function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var running = false;
    var enabled = false;
    var runningTimeOut;

    this.enable = function () {
        enabled = true;
    };
    this.disable = function () {
        enabled = false;
        clearTimeout(runningTimeOut);
    };

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... �������� ��������� ��� ���������
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    function onReady() {
        console.log( 'Coffee is ready!' );
    }

    this.run = function() {
        if (!enabled) {
            throw new Error('Please, turn on your coffee machine!');
        }
        running = true;
        runningTimeOut = setTimeout(function(){
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
coffeeMachine.run();
//coffeeMachine.disable(); // ��������� ������, ������ �� �������
