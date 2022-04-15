// Обычный объект
let obj = {a: 1, b:2}

const handler = { // обработчик действий над обьектом Прокси
  get(item, property, itemProxy) { // get вызывается при получении значения объекта
     // тут может выполнятся абсолюьно любая логика
    console.log(`Мы считываем значение свойства "${property}" и оно равно ${item[property]}`);
    return item[property]
  },
  set(item, property, value, itemProxy){ // set выполяется при записи какого либо значения в объект
    // тут может выполнятся абсолюьно любая логика
    console.log(`Мы записываем '${value}' в значение свойства "${property}"`);
    item[property] = value
  },
  deleteProperty(item, propKey){// deleteProperty выполяется при удалении какого либо значения из объекта
    // тут может выполнятся абсолюьно любая логика
    console.log(`Мы удалили '${propKey}' из объекта`);
    delete item[propKey]
    return true
  }
}

// Создание объекта Proxy над обычным объектом
let objProxy = new Proxy(obj, handler)



console.log(objProxy.a);
objProxy.b = 122
console.log(objProxy.b); // 122

delete objProxy.b
console.log(objProxy)