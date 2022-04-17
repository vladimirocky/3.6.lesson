// Обычный объект

let obj = {a: 1, b:2}

const handler = { // обработчик действий над обьектом Прокси
  get(item, property) { // get вызывается при получении значения объекта
     // тут может выполнятся абсолюьно любая логика
    console.log(`Мы считываем значение свойства "${property}" и оно равно ${item[property]}`);
    return item[property]
  },
  set(item, property, value){ // set выполяется при записи какого либо значения в объект
    // тут может выполнятся абсолюьно любая логика
    console.log(`Мы записываем '${value}' в значение свойства "${property}"`);
    item[property] = value
  },
  deleteProperty(item, property){// deleteProperty выполяется при удалении какого либо значения из объекта
    // тут может выполнятся абсолюьно любая логика
    console.log(`Мы удалили '${property}' из объекта`);
    delete item[property]
    return true
  }
}

// Создание объекта Proxy над обычным объектом
let objProxy = new Proxy(obj, handler)

// Мы считываем значение свойства "a" и оно равно 1
console.log(objProxy.a);
objProxy.b = 122
// Мы записываем '122' в значение свойства "b"

console.log(objProxy.b);
// 122

delete objProxy.b
//Мы удалили 'b' из объекта

console.log(objProxy)
