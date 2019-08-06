/**
 * 要求使用 class，完成如下需求：
 *
 * 1. 写出一个构造函数 Animal
 *    输入为空
 *    输出为一个新对象，该对象的共有属性为 {行动: function(){}}，没有自有属性
 * 2. 再写出一个构造函数 Human
 *    Human 继承 Animal
 *    输入为一个对象，如 {name: 'Frank', birthday: '2000-10-10'}
 *    输出为一个新对象，该对象自有的属性有 name、物种和 birthday，共有的属性有行动和使用工具
 *   （由于 class 的语法问题，所以物种只能勉为其难作为一个自有属性，本来应该是共有属性的）
 * 3. 再写出一个构造函数 Asian
 *    Asian 继承 Human
 *    输入为一个对象，如 {city: '北京', name: 'Frank', birthday: '2000-10-10' }
 *    输出为一个新对象，改对象自有的属性有 name city 物种 肤色和 bitrhday，共有的属性有行动和使用工具
 *
 * 即，最后一个新对象是 Asian 构造出来的，Asian 继承 Human，Human 继承 Animal
 */

class Animal {
    move() {
        console.log('I am moving...')
    }
}

class Human extends Animal {
    constructor(person) {
        super()
        this.name = person.name || 'Unnamed'
        this.birthday = person.birthday || '1970-01-01'
    }

    species = 'Human'

    toolManipulating() {
        console.log('I can use tools!')
    }
}

class Asian extends Human {
    constructor(person) {
        super(person)
        this.city = person.city || 'Beijing'
    }

    skin = 'Yellow'
}

var jay = new Asian({ name: 'Jay', birthday: '1979-01-18', city: 'Taiwan' })
/*
class Animal {
    move() {
        console.log('I am moving...')
    }
}

class Human extends Animal {
    constructor(person) {
        super()
        this.name = person.name || 'Unnamed'
        this.birthday = person.birthday || '1970-01-01'
    }

    toolManipulating() {
        console.log('I can use tools!')
    }
}

Human.prototype.species = 'Human'

class Asian extends Human {
    constructor(person) {
        super(person)
        this.city = person.city || 'Beijing'
    }
}

Asian.prototype.skin = 'Yellow'
var jay = new Asian({ name: 'Jay', birthday: '1979-01-18', city: 'Taiwan' })
*/
