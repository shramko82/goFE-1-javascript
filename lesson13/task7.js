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
//fridge.addFood("котлета"); // ошибка, холодильник выключен

// создать холодильник мощностью 500 (не более 5 еды)
//var fridge = new Fridge(500);
//fridge.enable();
//fridge.addFood("котлета");
//fridge.addFood("сок", "зелень");
//fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье