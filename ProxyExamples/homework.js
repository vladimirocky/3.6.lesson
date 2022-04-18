/**
  * Код ниже реализует следующее:
 * 1. объект оборачивается в прокси
 * 2. базовый метод данного объекта set переопределяется
 * 3. теперь, если set применяется по отношению к свойству friends мы не переписываем заново массив друзей, а просто добавляем х
 * 4. при это мы можем передать несколько друзей в строке и разделить их символом '_'
 * 5. когда мы обращаемся к свойству friends объекта прокси и присваиваем ему какое-то значение вызывается базовый метод set
 * 6. видим, что мы действительно теперь можем довольно просто добавлять друзей
 *
 * ЗАДАНИЕ №1
 *
 * Добавьте в Proxy метод get таким образом, чтобы:
 * 1. Мы могли получать значения сразу нескольких свойств одной строкой
 * 2. Например если мы напшем console.log(personProxy.name_profession_citizen) то получим вывод "Vasya Frontend developer Moscow"
 * 3. Если введем console.log(personProxy.age_citizen_name_age) то получим "33 Moscow Vasya 33"
 */

let person = {
    name: "Vasya",
    age: 33,
    profession : "Frontend developer",
    citizen : "Moscow",
    friends : ['Kolya','Anya','Misha']
}

let personProxy = new Proxy(person, {
    set (target,prop, value) {
        if (prop !== 'friends') {
            // для всех кроми свойства friends действуем по-умолчанию
            Reflect.set(target, prop, value);
        } else {
            // а вот friends теперь будет пополнять массив значениями через '_'
            let addFriends = value.split('_');
            for (let friend of addFriends) {
                target.friends.push(friend);
            }
        }
    }
})

// [ 'Kolya', 'Anya', 'Misha', 'Sasha', 'Eugene', 'Dasha' ]
personProxy.friends = "Sasha_Eugene_Dasha";

console.log(personProxy.friends);