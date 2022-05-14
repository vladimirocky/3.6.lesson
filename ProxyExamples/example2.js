
let user = { name: 'Николай', age: 29 };

const userProxy = new Proxy( user, {
    get(target,prop){
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            // если бы не проксировали -- добавилось бы новое свойство
            // а если его не существует -- выкидываем ошибку
            throw new Error(`${prop} не существует в ${target}`)

        }
    },
    has(target, prop) {
        // проверяем присутсвует  или нет
        return ['name','age'].includes(prop)
        // а можем "скрыть" например age
        // вот так
        // return ['name'].includes(prop)
    },
    deleteProperty(target, prop) {
      delete target[prop];
      return true
    }

})

/**
 * Тут демонстрируем что после того,
 * как мы проксировали объект
 * необходимо уже работать именно с userProxy
 * дабы не путаться
 */

userProxy.name = "Петя"

console.log(user.name);
console.log(28 in userProxy);


