function Animal() {}

Animal.prototype.move = function() {}

function Human(person) {
    Animal.call(this)
    this.name = person.name || 'Unnamed'
    this.birthday = person.birthday || '1970-01-01'
}

inherits(Human, Animal)

Human.prototype.species = 'Human'
Human.prototype.toolManipulating = function() {}

function Asian(person) {
    Human.call(this, person)
    var city = person.city || 'Beijing'
}

inherits(Asian, Human)

Asian.prototype.skin = 'yellow'

var jay = new Asian({ name: 'Jay', birthday: '1979-01-18', city: 'Taiwan' })

/****************** Helper ***********************/
function inherits(Child, Parent) {
    function F() {}
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
}

/*

// 1.空函数 F
function F() {}

// 2.把 F 的原型指向 Animal.prototype
F.prototype = Animal.prototype

// 3.把 Human 的原型指向一个新的 F 对象，F 对象的原型正好指向 Animal.prototype
Human.prototype = new F()

// 4.将 Human 原型的构造函数修复为 Human(Human.prototype被重写,导致Human.prototype.constructor也一同被重写)
Human.prototype.constructor = Human

*/
