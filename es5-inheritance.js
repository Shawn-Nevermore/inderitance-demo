/**
 * 需求：
 * 1. 写出一个构造函数 Animal
 *    输入：空
 *    输出：一个新对象，该对象的共有属性为 {行动: function(){}}，没有自有属性
 * 2. 再写出一个构造函数 Human
 *    Human 继承 Animal
 *    输入：一个对象，如 {name: 'Frank', birthday: '2000-10-10'}
 *    输出：一个新对象，该对象自有的属性有 name 和 birthday，共有的属性有物种（人类）、行动和使用工具
 * 3. 在写出一个构造函数 Asian
 *    Asian 继承 Human
 *    输入：一个对象，如 {city: '北京', name: 'Frank', birthday: '2000-10-10' }
 *    输出：一个新对象，该对象自有的属性有 name city 和 bitrhday，共有的属性有物种、行动和使用工具和肤色
 *
 * 即，最后一个新对象是 Asian 构造出来的，Asian 继承 Human，Human 继承 Animal。
 */

/**
 * 本文用 es3 的方法组合继承的方法，即构造继承+原型式继承
 */

function Animal() {}

Animal.prototype.move = function() {}

function Human(person) {
    Animal.call(this) //借用构造函数，继承了Animal且向父类传参
    this.name = person.name || 'Unnamed'
    this.birthday = person.birthday || '1970-01-01'
}

inherits(Human, Animal)

// 注意，如果写成 Human.prototype = {} 形式，会直接打破原型链，继承会出错
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
