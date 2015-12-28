function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

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
        setTimeout(onReady, getTimeToBoil());
    };

    this.setOnReady = function(func) {
        onReady = func;
    };

}


var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

/*coffeeMachine.setOnReady(function() {
    var amount = coffeeMachine.getWaterAmount();
    console.log( '����� ����: ' + amount + '��' ); // ���� �����: 150 ��
});*/

coffeeMachine.run();
