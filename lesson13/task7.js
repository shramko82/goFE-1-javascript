function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}


function Fridge() {
    Machine.apply(this, arguments);

    var food = [];

    this.addFood = function(){
        var newAmount = food.length+arguments.length;
        //console.log('Old amount '+food.length);
        //console.log('New amount '+newAmount);
        if (!this._enabled) {
            throw new Error('Please, turn on the fridge');
        }
        if (newAmount > (this._power/100)) {
            throw new Error('Too much food');
        }
        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]);
        }
        //console.log(food);
    };

    this.getFood = function(){
        return food.slice();
    }


}

//var fridge = new Fridge(200);
//fridge.addFood("�������"); // ������, ����������� ��������

// ������� ����������� ��������� 500 (�� ����� 5 ���)
//var fridge = new Fridge(500);
//fridge.enable();
//fridge.addFood("�������");
//fridge.addFood("���", "������");
//fridge.addFood("�������", "�����", "����"); // ������, ������� ����� ���

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("�������");
fridge.addFood("���", "�������");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // �������, ���, �������

// ���������� ��������� �� ������ �� ��� � ������������
fridgeFood.push("�����", "�����");

console.log( fridge.getFood() ); // ������ ��-��������: �������, ���, �������