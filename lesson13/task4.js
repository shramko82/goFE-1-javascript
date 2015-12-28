function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var running = false;

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
        console.log( '���� �����!' );
    }

    this.run = function() {
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




var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log( '��: ' + coffeeMachine.isRunning() ); // ��: false

coffeeMachine.run();
console.log( '� ��������: ' + coffeeMachine.isRunning() ); // � ��������: true

coffeeMachine.setOnReady(function() {
    console.log( "�����: " + coffeeMachine.isRunning() ); // �����: false
});
