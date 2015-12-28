function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("�������� ������ ���� �������������");
        }
        if (amount > capacity) {
            throw new Error("������ ������ ������, ��� " + capacity);
        }

        waterAmount = amount;
    };

    this.addWater = function (amount) {
        var newWaterAmount = waterAmount + amount;
        if (newWaterAmount < 0) {
            throw new Error("�������� ������ ���� �������������");
        }
        if (newWaterAmount > capacity) {
            throw new Error("������ ������ ������, ��� " + capacity);
        }

        waterAmount = newWaterAmount;
    };

    function onReady() {
        console.log( '���� �����!' + waterAmount );
    }

    this.run = function() {
        setTimeout(onReady, getTimeToBoil());
    };

}


var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
//coffeeMachine.addWater(300); // ������ ������ ������, ��� 400
coffeeMachine.run();