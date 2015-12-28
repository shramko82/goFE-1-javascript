function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("�������� ������ ���� �������������");
        }
        if (amount > capacity) {
            throw new Error("������ ������ ���� ������, ��� " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    this.getPower = function() {
        return power;
    };

}


var coffeeMachine = new CoffeeMachine(300, 1000);

console.log(coffeeMachine.getPower());