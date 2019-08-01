function Animal() {}
Animal.prototype.move = function() {}

function Human(options) {
    Animal.call(this)
    this.name = options.name
    this.生命值 = 42
}

function fakeA() {}
fakeA.prototype = Animal.prototype
Human.prototype = new fakeA()

Human.prototype.species = 'human'
Human.prototype.toolManipulating = function() {}
var s = new Human({ name: '方方' })
