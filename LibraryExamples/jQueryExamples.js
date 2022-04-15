$ // стандартный объект jQuery

$( document ).ready(function() { // получение глобального объекта document и выполнение функции при его загрузке
  console.log( "ready!" );
});

$( "#myDivId" ); // получение элемента по id (#)
$( ".myDivClass" ); // получение элемента по классу

var myValue = $( "#myDivId" ).val(); // получение значения инпута
 
$( "#myDivId" ).val( "hello world" ); // запись значение

$( "p" ).click(function() { // установка обработчика на click
  console.log( "You clicked a paragraph!" );
});

$( "p" ).on( "click", function() { // та же логика обработчика
  console.log( "click" );
});

$( "#menu li" ).hover(function() { 
  $( this ).toggleClass( "hover" );
});

$( "a" ).simulate( "click" ); // можем искуственно симулировать клик

$( "p" ).hide();// спрятать элемент
 
// показать все спрятанные div-ы
$( "div.hidden" ).show();



// Чтобы изменить класс у html элемента

// стандартный способ 
const someDiv = document.querySelector('.someClass')
someDiv.classList.add('newClass')
// document.querySelector('.someClass').classList.add('newClass')

//jQuery
$('.someClass').addClass( "newClass yourClass" );