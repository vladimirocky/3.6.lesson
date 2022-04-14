const test = {
    name : 'test',
    value: true
}

// так мы положем только [object Object]
localStorage.setItem('someVar',test);

// window.onstorage = () => {}
// вызывается когда что-то записывается в localStorage
// только если это происходит в другой вкладке
window.addEventListener('storage', event => {
    console.log(event);
})