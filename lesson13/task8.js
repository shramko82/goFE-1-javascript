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
    };

    this.filterFood = function(func){
        return food.filter(func);
    };

    this.removeFood = function(item) {
        var index = food.indexOf(item);
        if (index > -1) {
            food.splice(index, 1);
        }
    };

    this.disable = function() {
        if (food.length > 0) {
           throw new Error('Fridge is not empty!');
        }
        this._enabled = false;
    };


}


var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда