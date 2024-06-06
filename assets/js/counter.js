// counter.js
document.addEventListener('DOMContentLoaded', function() {
    let ol = document.querySelector('ol');
    let items = ol.children.length;
    ol.style.counterReset = 'list-counter ' + (items + 1);
});
