// _ - стандартная переменная lodash при импорте

var elements = [1,2,3,1,2,4,2,3,5,3]
// функция lodash для поиска уникальных значений массива
const uniqElem = _.uniq(elements)
// тот же результат стандартными средствами
//(но менее производительный)
const uniqElem2 = [...new Set(elements)]

var object = { 'a': 1 };
var other = { 'a': 1 };
// сравнение объектов - даже сложной вложенности
_.isEqual(object, other); // => true
 
object === other; // стандартными методами не так легко сравнивать объекты
// => false

// isEqual работает с разными типами данных


var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects); // глубокое копирование обьектов или других типов
console.log(deep[0] === objects[0]); // показывает что скопирована не ссылка а полностью идентичный обьект
// => false

_.compact([0, 1, false, 2, '', 3]); // убирает falsey значения из массива
// => [1, 2, 3]

var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c'); // удаляет все значения массива которые равны аргументам
console.log(array);
// => ['b', 'b']