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
    friends : ['Kolya','Anya','Misha'],

    getNameAge(){
        return `${this.name} ${this.age}`;
    },
    getProfCity(){
        return `${this.profession} ${this.citizen}`
    },
    makeDiff(){
        console.log('doSomething');
    },
    writeChannel(){
        console.log('any stream');
    }
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
    },
  get(target,prop){
      //  console.log(`мы считываем значение ${prop} i ono ravno ${target[prop]}`);
    if(!(prop in target)){
       return prop
      .split('_')
      .map(e =>target[e])
      .join(' ')
      
         

    }
  return target[prop]
    }
    
    



    /**
     * ВАШ КОД ТУТ
     *  ...
     * get (...){...}
     *  ...
     */
})

// [ 'Kolya', 'Anya', 'Misha', 'Sasha', 'Eugene', 'Dasha' ]
personProxy.friends = "Sasha_Eugene_Dasha";
console.log(personProxy.age_citizen_name_age)
console.log(personProxy.friends);

/**
 *  ЗАДАНИЕ №2
 * 1. Выяснить какие базовые методы вызываются у объекта когда к нему применяют цикл for (let prop of personProxy)
 * 2. Проксировать эти методы таким образом, чтобы при прохождении идентификаторов свойств объекта
 *  циклом for...of в prop попадали только методы, которые начинаются с get
 *  3. в цикле for...of пройтсь по идентифкаторам свойств объекта и вызывать полученные в prop методы
 *  4. убедиться что были вызванны только методы get...
 */
 //for(let prop in personProxy){
///console.log(prop);
//} // получаем ключи обьекта и методы 


const hidden = (target,prefix = 'get')=>{
    return new Proxy(target,{
        has:(obj,prop) => prop in obj && prop.startsWith(prefix),
        ownKeys: obj =>Reflect.ownKeys(obj).filter (p=> p.startsWith(prefix)),
        get:(obj,prop,receiver) => (prop in receiver ? obj[prop] : Object.defineProperties(obj,'prop',{
            enumerable:false,
        }))
    })
}

const objTest = hidden(person)
for(let keys in objTest){
    console.log(keys);
}